import * as React from 'react';
import '../table.scss';
import { calculateAge, toKB, fetchAsync } from 'utils/functions';
import { Link } from 'react-router-dom';
import { AppState } from 'redux/root-reducer';
import { connect } from 'react-redux';
import { NodeState } from 'redux/nodes/reducer';
import { Node } from 'redux/nodes/actions';
import { RouteComponentProps } from 'react-router';
import { PageCount } from 'components/tables/page-count';
import MetaTags from 'react-meta-tags';

// URLSearchParams API Polyfill: https://github.com/WebReflection/url-search-params
if ('searchParams' in HTMLAnchorElement.prototype) {
  require('url-search-params');
}

interface OwnProps {
  paginated?: boolean;
  history?: RouteComponentProps<any>['history'];
  location?: RouteComponentProps<any>['location'];
}

type Props = OwnProps & NodeState;

interface State {
  data: { current_height: number; blocks: any[]; pending: boolean };
  limit: number;
  page: number;
}

class BlocksClass extends React.Component<Props, State> {
  public state = {
    data: { current_height: 0, blocks: [], pending: false },
    limit: this.props.paginated ? 25 : 5,
    page: 0
  };

  public componentWillMount() {
    if (this.props.location) {
      const queryStr = new URLSearchParams(this.props.location.search);
      const queries: any = {};
      for (const pair of queryStr.entries()) {
        queries[pair[0]] = pair[1];
      }
      if (queries.page) {
        this.setState({
          ...this.state,
          page: queries.page
        });
      }

      if (queries.limit) {
        this.setState({
          ...this.state,
          limit: queries.limit
        });
      }
    }
  }

  public componentDidMount() {
    this.fetchData();
  }

  public componentDidUpdate(_: Props, prevState: State) {
    if (prevState.page !== this.state.page && !this.state.data.pending) {
      this.fetchData();
    }
  }

  public fetchData = () => {
    const { nodes, selectedNode } = this.props;
    const node = nodes.find(n => n.name === selectedNode) as Node;
    this.setState({ data: { ...this.state.data, pending: true } });

    fetchAsync(node.url + `/api/transactions?limit=${this.state.limit}&page=${this.state.page}`)
      .then(json => {
        const { current_height, blocks, page } = json.data;
        this.setState({ data: { current_height, blocks, pending: false }, page });
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  public incrementPage = () => {
    this.setState({ page: this.state.page + 1 });
    if (this.props.history) {
      this.props.history.push({
        pathname: 'blocks',
        search: 'page=' + (this.state.page + 1)
      });
    }
  };

  public decrementPage = () => {
    if (this.state.page > 0) {
      this.setState({ page: this.state.page - 1 });
      if (this.props.history) {
        this.props.history.push({
          pathname: 'blocks',
          search: 'page=' + (this.state.page - 1)
        });
      }
    }
  };

  public render() {
    const { paginated } = this.props;
    const {
      data: { blocks, current_height, pending },
      limit,
      page
    } = this.state;

    const Previous = () => (
      <button
        className="MemPool-table-footer-paginate"
        onClick={this.decrementPage}
        disabled={current_height <= limit || page === 0 || pending}
      >
        <i className="nc-icon nc-ic_keyboard_arrow_left_24px size_24px" />
      </button>
    );
    const Next = () => (
      <button
        className="MemPool-table-footer-paginate"
        onClick={this.incrementPage}
        disabled={current_height <= limit || limit * page + limit > current_height || pending}
      >
        <i className="nc-icon nc-ic_keyboard_arrow_right_24px size_24px" />
      </button>
    );

    return (
      <div className="Blocks card">
        <MetaTags>
          <title>Monero (XMR) Blocks - XMRScan</title>
          <meta
            name="description"
            content="Monero (XMR) Latest Blocks. Check Monero Blockchain Blocks - XMRScan"
          />
          <meta property="og:title" content="Monero (XMR) Blocks - XMRScan" />
          <meta name="og:title" content="Monero (XMR) Blocks - XMRScan" />
          <meta
            name="og:description"
            content="Monero (XMR) Latest Blocks. Check Monero Blockchain Blocks - XMRScan"
          />
          <meta property="og:url" content="https://xmrscan.org/blocks" />
          <meta property="og:type" content="website" />
          <meta
            name="twitter:description"
            content="Monero (XMR) Latest Blocks. Check Monero Blockchain Blocks - XMRScan"
          />
          <meta name="twitter:title" content="Monero (XMR) Blocks - XMRScan" />
          <meta name="application-name" content="XMRScan" />
          <meta name="apple-mobile-web-app-title" content="XMRScan" />
          <link rel="canonical" href="https://xmrscan.org/blocks" />
        </MetaTags>
        <div className="Blocks-header">
          {window.location.pathname === '/' && <h2 className="Blocks-title">Monero Blocks</h2>}
          {window.location.pathname !== '/' && <h1 className="Blocks-title">Monero Blocks</h1>}
          <div className="flex-spacer" />
          {!!paginated && (
            <>
              <PageCount
                pending={pending}
                limit={limit}
                page={page}
                itemsShown={blocks.length}
                itemCount={current_height}
              />
              <Previous />
              <Next />
            </>
          )}
          <button className="Blocks-refresh" onClick={this.fetchData}>
            <i className="nc-icon nc-ic_refresh_24px size_24px" />
          </button>
          {!paginated && (
            <Link to="/blocks" className="Blocks-view-all">
              View All
            </Link>
          )}
        </div>
        <table className="Blocks-table">
          <thead className="Blocks-table-head">
            <tr>
              <th>Height</th>
              <th>Block Hash</th>
              <th>Txs</th>
              <th>Size</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody className="Blocks-table-body">
            {pending
              ? Array(limit)
                  .fill('')
                  .map(() => (
                    <tr
                      className="Blocks-table-pending-api-data"
                      aria-hidden={true}
                      key={Math.random()}
                    >
                      <td>
                        <div className="skeleton">1554250</div>
                      </td>
                      <td>
                        <div className="truncate">
                          <div className="truncated skeleton">
                            b0a45cab8083019d729f62b70ef5bb063e8b22eaeaa73d64df74bf2befdb8ff1
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="skeleton">19</div>
                      </td>
                      <td>
                        <div className="skeleton">292.146 kB</div>
                      </td>
                      <td>
                        <div className="skeleton">10m</div>
                      </td>
                    </tr>
                  ))
              : blocks.map((block: any) => (
                  <tr key={block.hash}>
                    <td>
                      <Link to={`block/${block.height}`}>{block.height}</Link>
                    </td>
                    <td>
                      <div className="truncate">
                        <div className="truncated">
                          <Link to={`block/${block.hash}`}>{block.hash}</Link>
                        </div>
                      </div>
                    </td>
                    <td>{block.txs.length}</td>
                    <td>{toKB(block.size)}</td>
                    <td>{calculateAge(block.timestamp)}</td>
                  </tr>
                ))}
          </tbody>
        </table>
        <div className="flex-spacer" />
        {!!paginated && (
          <div className="MemPool-table-footer">
            <div className="flex-spacer" />
            <PageCount
              pending={pending}
              limit={limit}
              page={page}
              itemsShown={blocks.length}
              itemCount={current_height}
            />
            <Previous />
            <Next />
          </div>
        )}
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

export const Blocks = connect(mapStateToProps)(BlocksClass);
