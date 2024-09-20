import * as React from 'react';
import './search-input.scss';
import { AppState } from 'redux/root-reducer';
import { connect } from 'react-redux';
import { NodeState } from 'redux/nodes/reducer';
import { fetchAsync } from 'utils/functions';
import { Node } from 'redux/nodes/actions';
import { withRouter, RouteComponentProps } from 'react-router';
import { addNotification, AddNotificationType } from 'redux/notifications/actions';

interface State {
  data: any;
  queryStr: string;
}

interface DispatchProps {
  addNotification: AddNotificationType;
}

type Props = NodeState & DispatchProps & RouteComponentProps<{}>;
class SearchInputClass extends React.Component<Props, State> {
  public state = {
    data: {},
    queryStr: ''
  };

  public node: any;
  constructor(props: any) {
    super(props);
    // React v16.3 createRef() API, until @types/react have updated cast as 'any'
    this.node = (React as any).createRef();
  }

  public onEnter = (e: KeyboardEvent) => {
    if (e.keyCode === 13) {
      this.fetchData(this.state.queryStr);
    }
  };

  public onSubmitBtn = () => {
    this.fetchData(this.state.queryStr);
  };

  public componentDidMount() {
    this.node.current.addEventListener('keypress', this.onEnter);
  }

  public componentWillUnmount() {
    this.node.current.removeEventListener('keypress', this.onEnter);
  }

  public fetchData = async (queryStr: string) => {
    const { nodes, selectedNode } = this.props;
    const node = nodes.find(n => n.name === selectedNode) as Node;

    fetchAsync(node.url + `/api/search/${queryStr}`)
      .then(json => {
        if (json.status === 'success') {
          const location = !!json.data.tx_hash
            ? `/tx/${json.data.tx_hash}`
            : !!json.data.hash
              ? `/block/${json.data.hash}`
              : `/block/${json.data.height}`;
          this.setState({ queryStr: '' });
          this.node.current.blur();
          this.props.history.push(location);
        } else {
          this.props.addNotification({ type: 'Error', text: 'No results found' });
          throw new Error('Invalid query string');
        }
      })
      .catch(error => {
        this.setState({ data: { ...this.state.data, pending: false } });
        console.log(error.message);
      });
  };

  public onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      queryStr: e.target.value
    });
  };

  public render() {
    return (
      <div className="Submit-search-wrapper">
        <input
          type="text"
          className="Search"
          placeholder="Search Transactions and Blocks"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          value={this.state.queryStr}
          onChange={this.onChange}
          ref={this.node}
        />
        <button className="Submit-search-btn" onClick={this.onSubmitBtn}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="16px" height="16px">
            <path
              fill="white"
              d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"
            />
          </svg>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    selectedNode: state.nodes.selectedNode,
    nodes: state.nodes.nodes
  };
};

export const SearchInput = connect(
  mapStateToProps,
  { addNotification }
)(withRouter<Props>(SearchInputClass));
