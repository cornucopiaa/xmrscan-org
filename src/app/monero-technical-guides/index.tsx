import * as React from 'react';
import '../home/home.scss';
import { MemPool } from 'components/tables/mempool';
import { Blocks } from 'components/tables/blocks';
import { MoneroGraph } from 'components/line-graph/xmr';
import MetaTags from 'react-meta-tags';

export class MoneroTechnicalGuides extends React.Component {
  public state = {
    width: 400,
    height: 100
  };

  public componentWillMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  public updateDimensions = () => {
    const clientWidth = document.documentElement.clientWidth;
    // take rem into account when adjusting width for padding
    const width =
      clientWidth <= 1016 ? (clientWidth > 600 ? clientWidth - 64 : clientWidth - 26) : 400;
    const height = clientWidth > 600 && clientWidth <= 1016 ? 150 : 100;
    // adjust for border width
    this.setState({ width: width - 2, height });
  };

  public render() {
    const { width, height } = this.state;
    const structuredJSON = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does a Monero transfer take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'In order for Monero transfers to become valid, they need to be put into a block. On average, one Monero blockchain block is generated in 2 minutes.'
          }
        },
        {
          '@type': 'Question',
          name: 'How many confirmations do Monero transactions require?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Theoretically, it only takes one confirmation (or rather 2 minutes) for a Monero transaction to be done.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the transaction fee for Monero? Are Monero transactions expensive?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'There are different factors that influence how much fee is charged on a Monero transaction. The level of priority indicated on the transaction will also influence the fees paid. First, demand and supply play a huge role in Monero transaction fees. Other factors that may be key include the cost of electricity, the competition between miners, and the cost of hardware. Unknown to many, when you want to send Monero coins that were sent to you as fragments, the transaction fee is increased too.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is Monero a standalone blockchain? If so, how does it work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              "Monero is one of the few privacy-oriented blockchain coins in existence. It is built on a public distributed ledger and all transactions conducted are anonymous. A block's transaction count is calculated by taking the median of the past 100 blocks and multiplying it by two."
          }
        },
        {
          '@type': 'Question',
          name: 'Exactly what is a Monero address? And how does it work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Monero addresses are public identifiers where a recipient gets paid. It is gotten from a randomly-generated sequence of a private key. Sending your address does not disclose info on your balance and past transactions. Why? Transactions in Monero are sent to stealth addresses different from your original public key and Monero blockchain doesn’t show the data the same way Bitcoin or Ethereum blockchains do.'
          }
        },
        {
          '@type': 'Question',
          name: 'In what way does the Monero network work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Operating through a peer-to-peer system, Monero is a blockchain designed to support anonymous transactions. It is easy to join the Monero network and run nodes insomuch as the user has a stable internet and an internet-enabled device. The miners are responsible for processing transactions into blocks, which are in turn added to the final blockchain by validation from the whole network.'
          }
        }
      ]
    });

    return (
      <>
        <section className="card New-User-CTA">
          <div className="New-User-CTA-text-wrapper">
            <h1 className="New-User-CTA-title">Technical Guides for Monero Users</h1>
            <p className="New-User-CTA-text">
              Monero's technical ecosystem offers powerful tools for advanced users. From setting up
              nodes to using APIs, explore comprehensive guides to optimize your Monero experience.
            </p>
          </div>
          <MoneroGraph width={width} height={height} />
        </section>
        <section className="card New-User-CTA">
          <div className="New-User-CTA-text-wrapper">
            <h2 className="New-User-CTA-title New-User-CTA-title-md">Setting Up a Monero Node</h2>
            <p className="New-User-CTA-text">
              Running your own Monero node allows you to verify transactions independently and
              enhances your privacy by eliminating reliance on third-party nodes. It also supports
              the decentralization and resilience of the Monero network.
            </p>
            <p className="New-User-CTA-text">
              To set up a node, download the official Monero CLI or GUI Wallet, which includes the
              daemon software monerod. You’ll need sufficient disk space (over 100 GB) and a stable
              internet connection to sync the entire blockchain. Once running, your node can connect
              locally to your wallet or be configured as a remote node for others.
            </p>
          </div>
        </section>
        <MemPool />
        <section className="card New-User-CTA">
          <div className="New-User-CTA-text-wrapper">
            <h2 className="New-User-CTA-title New-User-CTA-title-md">Accessing Remote Nodes</h2>
            <p className="New-User-CTA-text">
              Remote nodes allow users to connect to the Monero network without hosting a full node.
              These nodes are ideal for lightweight wallets or limited storage environments. There
              are two types of remote nodes:
            </p>
            <ul>
              <li>
                <p className="New-User-CTA-text">
                  • Private remote nodes: these are nodes you set up and control, often on a VPS or
                  another external server. They offer enhanced privacy and security, as you manage
                  who has access and how the node operates.
                </p>
              </li>
              <li>
                <p className="New-User-CTA-text">
                  • Public remote nodes: operated by third parties, these nodes are openly
                  accessible to anyone. Your wallet connects to a public or trusted third-party node
                  to broadcast transactions and check balances. This setup is especially useful for
                  mobile and desktop wallets like Feather, Monerujo, and Cake Wallet. While
                  convenient, using public nodes can expose metadata such as your IP address and
                  transaction timings to the node operator, potentially compromising privacy.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <Blocks />
        <section className="card New-User-CTA">
          <div className="New-User-CTA-text-wrapper">
            <h2 className="New-User-CTA-title New-User-CTA-title-md">Integrating Monero API</h2>
            <p className="New-User-CTA-text">
              Monero provides two primary APIs for developers aiming to interact with its network:
            </p>
            <ul>
              <li>
                <p className="New-User-CTA-text">• Daemon RPC</p>
              </li>
              <li>
                <p className="New-User-CTA-text">• Wallet RPC</p>
              </li>
            </ul>
            <p className="New-User-CTA-text">
              These interfaces facilitate various operations, from blockchain data retrieval to
              wallet management. Detailed information on wallet RPC methods can be found in the
              Monero documentation's RPC Library. When integrating Monero into applications, it's
              common to use both RPC interfaces in tandem. The Daemon RPC provides access to
              blockchain data, while the Wallet RPC handles private key management and transaction
              creation.
            </p>
          </div>
        </section>
        <MetaTags>
          <title>Monero Technical Guides: Nodes, Remote Access & API | XMRscan</title>
          <meta
            name="description"
            content="In-depth Monero technical tutorials on setting up nodes, accessing remote nodes, and using the Monero API for integrations."
          />
          <meta
            property="og:title"
            content="Monero Technical Guides: Nodes, Remote Access & API | XMRscan"
          />
          <meta
            name="og:title"
            content="Monero Technical Guides: Nodes, Remote Access & API | XMRscan"
          />
          <meta
            name="og:description"
            content="In-depth Monero technical tutorials on setting up nodes, accessing remote nodes, and using the Monero API for integrations."
          />
          <meta property="og:url" content="https://xmrscan.org/" />
          <meta property="og:type" content="website" />
          <meta
            name="twitter:description"
            content="In-depth Monero technical tutorials on setting up nodes, accessing remote nodes, and using the Monero API for integrations."
          />
          <meta
            name="twitter:title"
            content="Monero Technical Guides: Nodes, Remote Access & API | XMRscan"
          />
          <meta name="application-name" content="XMRScan" />
          <meta name="apple-mobile-web-app-title" content="XMRScan" />
          <script type="application/ld+json">{structuredJSON}</script>
          <link rel="canonical" href="https://xmrscan.org/" />
        </MetaTags>
        <section className="promo">
          <h3>FAQs about Monero Technical Setup</h3>
          <p>
            Do I need a full node to use Monero?<br />
            No, you can use remote nodes if you prefer not to run your own.
          </p>

          <p>
            Are remote nodes less secure?<br />
            Potentially, as they expose your IP to the node operator.
          </p>
        </section>
      </>
    );
  }
}
