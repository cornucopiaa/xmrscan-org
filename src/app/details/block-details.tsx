import * as React from 'react';
import './details.scss';
import { formatApiDateStrings, toKB, fetchAsync } from 'utils/functions';
import { connect } from 'react-redux';
import { AppState } from 'redux/root-reducer';
import { NodeState } from 'redux/nodes/reducer';
import { RouteComponentProps } from 'react-router';
import { Node } from 'redux/nodes/actions';
import { Link } from 'react-router-dom';
import { DetailsSkeleton } from './skeleton-details';
import MetaTags from 'react-meta-tags';

type Props = NodeState & RouteComponentProps<{ block: string }>;

interface State {
  data: {
    block: any;
    pending: boolean;
  };
}

export class BlockDetailsClass extends React.Component<Props, State> {
  public state = {
    data: { block: null, pending: false }
  };

  public componentWillMount() {
    this.fetchBlock();
  }

  public componentDidUpdate(prevProps: Props) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.fetchBlock();
    }
  }

  public fetchBlock = () => {
    const { nodes, selectedNode } = this.props;
    const node = nodes.find(n => n.name === selectedNode) as Node;

    this.setState({ data: { ...this.state.data, pending: true } });
    fetchAsync(node.url + '/api/block/' + this.props.match.params.block)
      .then(json => {
        this.setState({ data: { block: json.data, pending: false } });
      })
      .catch(error => {
        console.log(error);
      });
  };

  public render() {
    const block = this.state.data.block as any;

    return (
      <div className="Details card">
        {!!block ? (
          <>
            <MetaTags>
              <title>Monero Block {block.block_height} — XMRScan</title>
              <meta
                name="description"
                content={`Monero (XMR) block ${block.block_height}, hash: ${block.hash}`}
              />
              <meta property="og:title" content={`Monero (XMR) block ${block.block_height}`} />
              <meta
                name="og:title"
                content={`Monero (XMR) block ${block.block_height} | XMRScan`}
              />
              <meta
                name="og:description"
                content={`Monero (XMR) block ${block.block_height}, hash: ${block.hash}`}
              />
              <meta property="og:url" content={`https://xmrscan.org/block/${block.block_height}`} />
              <meta property="og:type" content="website" />
              <meta
                name="twitter:description"
                content={`Monero (XMR) block ${block.block_height}, hash: ${block.hash}`}
              />
              <meta
                name="twitter:title"
                content={`Monero (XMR) block ${block.block_height} | XMRScan`}
              />
            </MetaTags>
            <div className="Details-header">
              <div className="Details-header-title-wrapper">
                <h1 className="Details-header-title">Monero (XMR) Block Explorer</h1>
                <p>
                  Welcome to XMRScan, a completely free Monero block explorer. Enter your
                  transaction ID, or TXID in the search bar to locate your transaction in Monero
                  blockchain.
                </p>
              </div>
              <div className="flex-spacer" />
              <p className="Details-header-timestamp">
                {formatApiDateStrings(block.timestamp_utc)}
              </p>
            </div>
            <div className="Details-body">
              <div className="Details-body-section">
                <p className="Details-body-section-title">Block</p>
                <div className="Details-body-section-content">
                  <div className="Details-body-section-content-input">
                    <p>Hash</p>
                    <p>{block.hash}</p>
                  </div>
                  <br />
                  <div className="Details-body-section-content-input">
                    <p>Height</p>
                    <p>{block.block_height}</p>
                  </div>
                </div>
              </div>
              <div className="Details-body-section">
                <p className="Details-body-section-title">Misc</p>
                <div className="Details-body-section-content">
                  <div className="Details-body-section-content-input">
                    <p>Size</p>
                    <p>{toKB(block.size)}</p>
                  </div>
                </div>
              </div>
              {block.txs[0].coinbase && (
                <div className="Details-body-section">
                  <p className="Details-body-section-title">Coinbase Tx</p>
                  <div className="Details-body-section-content">
                    <Link to={`/tx/${block.txs[0].tx_hash}`}>{block.txs[0].tx_hash}</Link>
                  </div>
                </div>
              )}
              <div className="Details-body-section">
                <p className="Details-body-section-title">Transactions</p>
                <table className="Details-body-section-table Details-body-section-content">
                  <thead>
                    <tr>
                      <th>Hash</th>
                      <th>Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    {block.txs.map((transaction: any, i: number) => {
                      return (
                        <tr key={i}>
                          <td>
                            <div className="truncate">
                              <div className="truncated">
                                <Link to={`/tx/${transaction.tx_hash}`}>{transaction.tx_hash}</Link>
                              </div>
                            </div>
                          </td>
                          <td>{toKB(transaction.tx_size)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="Details-body-section">
                <p>
                  Block was created on {formatApiDateStrings(block.timestamp_utc)}. It contains{' '}
                  {block.txs.length} transactions. Block size of the block {block.block_height} is{' '}
                  {toKB(block.size)}.
                </p>
              </div>
            </div>
          </>
        ) : (
          <DetailsSkeleton type="block" />
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

export const BlockDetails = connect(mapStateToProps)(BlockDetailsClass);
