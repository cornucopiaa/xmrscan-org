import * as React from 'react';
import './home.scss';
import { MemPool } from 'components/tables/mempool';
import { Blocks } from 'components/tables/blocks';
import { MoneroGraph } from 'components/line-graph/xmr';
import MetaTags from 'react-meta-tags';

export class Home extends React.Component {
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
        <MetaTags>
          <title>Monero (XMR) Blockchain Explorer - XMRScan</title>
          <meta
            name="description"
            content="XMRScan allows you to check XMR blocks and transactions with Monero blockchain explorer"
          />
          <meta property="og:title" content="Monero (XMR) Explorer - XMRScan" />
          <meta name="og:title" content="Monero (XMR) Explorer - XMRScan" />
          <meta
            name="og:description"
            content="XMRScan allows you to check XMR blocks and transactions with Monero blockchain explorer"
          />
          <meta property="og:url" content="https://xmrscan.org" />
          <meta property="og:type" content="website" />
          <meta
            name="twitter:description"
            content="XMRScan allows you to check XMR blocks and transactions with Monero blockchain explorer"
          />
          <meta name="twitter:title" content="Monero (XMR) Explorer - XMRScan" />
          <script type="application/ld+json">{structuredJSON}</script>
        </MetaTags>
        <section className="card New-User-CTA">
          <div className="New-User-CTA-text-wrapper">
            <h1 className="New-User-CTA-title">Monero (XMR) Block Explorer</h1>
            <p className="New-User-CTA-text">
              Welcome to XMRScan, a completely free Monero block explorer. Enter your transaction
              ID, or TXID in the search bar to locate your transaction in Monero blockchain.
            </p>
          </div>
          <MoneroGraph width={width} height={height} />
        </section>
        <MemPool />
        <Blocks />
        <section className="promo">
          <h3>How long does a Monero transfer take?</h3>
          <p>
            In order for Monero transfers to become valid, they need to be put into a block. On
            average, one Monero blockchain block is generated in 2 minutes.
          </p>

          <p>
            However, the Monero cannot be spent until at least 10 confirmations are received to
            ensure irreversibility. This indicates that the coins are frozen until 10 new blocks
            have been added (roughly 20 minutes).
          </p>

          <p>
            The demand for the network and the fees paid can impact the number of transactions put
            into a block, and these can, in turn, affect the transfer time, but on average, it’s
            safe to assume that a transaction is completed in 20 minutes.
          </p>

          <h3>How many confirmations do Monero transactions require?</h3>
          <p>
            Theoretically, it only takes one confirmation (or rather 2 minutes) for a Monero
            transaction to be done. However, due to how the system is built, the new blocks can be
            modified before another block is completed and added after it. To avoid malicious actors
            leveraging this to push recurring false transfers, the network ensures all sent Monero
            are locked till after at least 10 blocks are completed. In simple words, the
            transactions are mutable until 10 blocks are added after it.
          </p>

          <h3>What is the transaction fee for Monero? Are Monero transactions expensive?</h3>
          <p>
            There are different factors that influence how much fee is charged on a Monero
            transaction. The level of priority indicated on the transaction will also influence the
            fees paid.
          </p>
          <p>
            First, demand and supply play a huge role in Monero transaction fees. Other factors that
            may be key include the cost of electricity, the competition between miners, and the cost
            of hardware. Unknown to many, when you want to send Monero coins that were sent to you
            as fragments, the transaction fee is increased too.
          </p>

          <h3>Is Monero a standalone blockchain? If so, how does it work?</h3>
          <p>
            Monero is one of the few privacy-oriented blockchain coins in existence. It is built on
            a public distributed ledger and all transactions conducted are anonymous.
          </p>
          <p>
            A block's transaction count is calculated by taking the median of the past 100 blocks
            and multiplying it by two.
          </p>
          <p>
            Each transaction on Monero is made private using stealth addresses, which refers to
            randomly generated addresses for one-time transactions, ring signatures, a complex
            signature from an address’s key, and random public keys used to hide the details of a
            transaction.{' '}
          </p>

          <h3>Exactly what is a Monero address? And how does it work?</h3>
          <p>
            Monero addresses are public identifiers where a recipient gets paid. It is gotten from a
            randomly-generated sequence of a private key. Sending your address does not disclose
            info on your balance and past transactions. Why? Transactions in Monero are sent to
            stealth addresses different from your original public key and Monero blockchain doesn’t
            show the data the same way Bitcoin or Ethereum blockchains do.
          </p>

          <p>There are three major types of addresses on Monero:</p>
          <ol>
            <li>Integrated wallets- used for large business owners and automated transactions</li>
            <li>
              Raw address- refers to addresses used to earn rewards from mining or to receive Monero
              from legacy wallets
            </li>
            <li>Sub address- the default address type</li>
          </ol>

          <p>
            Apart from these, Monero also uses stealth addresses which enhance privacy on the
            network.
          </p>

          <h3>In what way does the Monero network work?</h3>
          <p>
            Operating through a peer-to-peer system, Monero is a blockchain designed to support
            anonymous transactions. It is easy to join the Monero network and run nodes insomuch as
            the user has a stable internet and an internet-enabled device. The miners are
            responsible for processing transactions into blocks, which are in turn added to the
            final blockchain by validation from the whole network.
          </p>
        </section>
      </>
    );
  }
}
