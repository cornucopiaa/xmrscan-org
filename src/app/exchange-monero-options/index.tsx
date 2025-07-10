import * as React from 'react';
import '../home/home.scss';
import { MemPool } from 'components/tables/mempool';
import { Blocks } from 'components/tables/blocks';
import { MoneroGraph } from 'components/line-graph/xmr';
import MetaTags from 'react-meta-tags';

export class ExchangeMoneroOptions extends React.Component {
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
            <h1 className="New-User-CTA-title">How to Exchange Monero (XMR)</h1>
            <p className="New-User-CTA-text">
              Exchanging Monero (XMR) involves selecting a platform and trading your coins for fiat
              or another cryptocurrency. Some platforms require account registration. When choosing
              a platform, consider factors like transaction fees, security measures, and whether the
              exchange supports your desired trading pairs. In the next section, we will provide
              examples of the exchange platforms.
            </p>
          </div>
          <MoneroGraph width={width} height={height} />
        </section>
        <section className="card New-User-CTA">
          <div className="New-User-CTA-text-wrapper">
            <h2 className="New-User-CTA-title New-User-CTA-title-md">
              Best Monero Exchange Platforms
            </h2>
            <p className="New-User-CTA-text">
              Large exchanges with high liquidity such as Kraken, KuCoin, and HTX support XMR
              trading. If you are privacy-focused, there are decentralized platforms like TradeOgre,
              Bisq, and Haveno. Additionally, non-custodial services like ChangeNOW and SimpleSwap
              facilitate quick swaps without requiring account registration.
            </p>
          </div>
        </section>
        <MemPool />
        <section className="card New-User-CTA">
          <div className="New-User-CTA-text-wrapper">
            <h2 className="New-User-CTA-title New-User-CTA-title-md">
              How to Convert Monero to Bitcoin
            </h2>
            <p className="New-User-CTA-text">
              Converting XMR to BTC usually involves a crypto-to-crypto exchange. Users need to
              deposit XMR into their exchange wallet, select BTC as the conversion pair, and execute
              the trade.
            </p>
            <p className="New-User-CTA-text">
              To convert Monero (XMR) to Bitcoin (BTC), follow these general steps:
            </p>
            <ul>
              <li>
                <p className="New-User-CTA-text">
                  1. Choose an exchange that supports XMR to BTC conversions, such as Kraken,
                  ChangeNOW, or SimpleSwap.
                </p>
              </li>
              <li>
                <p className="New-User-CTA-text">
                  2. Enter the amount of XMR you wish to convert and provide your BTC wallet
                  address.
                </p>
              </li>
              <li>
                <p className="New-User-CTA-text">
                  3. Send your XMR to the provided address; once confirmed, the equivalent BTC will
                  be transferred to your wallet.
                </p>
              </li>
            </ul>
            <p className="New-User-CTA-text">
              Always double-check wallet addresses and transaction details to ensure accuracy and
              security.
            </p>
          </div>
        </section>
        <Blocks />
        <section className="card New-User-CTA">
          <div className="New-User-CTA-text-wrapper">
            <h2 className="New-User-CTA-title New-User-CTA-title-md">Selling Monero for Cash</h2>
            <p className="New-User-CTA-text">
              Selling Monero for cash can be accomplished through various methods:
            </p>
            <ul>
              <li>
                <p className="New-User-CTA-text">
                  • Centralized exchanges (e.g. Kraken) allow you to sell XMR for fiat currencies,
                  which can then be withdrawn to your bank account.
                </p>
              </li>
              <li>
                <p className="New-User-CTA-text">
                  • Peer-to-Peer (P2P) marketplaces such as LocalMonero facilitate direct trades
                  between users without intermediaries.
                </p>
              </li>
              <li>
                <p className="New-User-CTA-text">
                  • Decentralized exchanges (DEXs): platforms like Bisq offer anonymous trading
                  options, allowing you to sell XMR for fiat or other cryptocurrencies.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <MetaTags>
          <title>Exchanging Monero: Best Platforms & Tips | XMRscan</title>
          <meta
            name="description"
            content="Explore the top exchanges to trade Monero (XMR) and learn how to swap, convert, or sell Monero for cash or Bitcoin."
          />
          <meta property="og:title" content="Exchanging Monero: Best Platforms & Tips | XMRscan" />
          <meta name="og:title" content="Exchanging Monero: Best Platforms & Tips | XMRscan" />
          <meta
            name="og:description"
            content="Explore the top exchanges to trade Monero (XMR) and learn how to swap, convert, or sell Monero for cash or Bitcoin."
          />
          <meta property="og:url" content="https://xmrscan.org/" />
          <meta property="og:type" content="website" />
          <meta
            name="twitter:description"
            content="Explore the top exchanges to trade Monero (XMR) and learn how to swap, convert, or sell Monero for cash or Bitcoin."
          />
          <meta name="twitter:title" content="Exchanging Monero: Best Platforms & Tips | XMRscan" />
          <meta name="application-name" content="XMRScan" />
          <meta name="apple-mobile-web-app-title" content="XMRScan" />
          <script type="application/ld+json">{structuredJSON}</script>
          <link rel="canonical" href="https://xmrscan.org/insights/exchange-monero-options" />
        </MetaTags>
        <section className="promo">
          <h3>FAQs about Exchanging Monero</h3>
          <p>
            What are the best exchanges for trading Monero?<br />
            Some of the most reliable exchanges for Monero include Kraken, KuCoin, HTX. For users
            prioritizing privacy, decentralized platforms like TradeOgre and P2P options like Bisq
            are recommended.
          </p>

          <p>
            Is it safe to exchange Monero for other cryptocurrencies?<br />
            Yes, as long as you use reputable exchanges with secure protocols and avoid unknown or
            low-volume platforms. Always enable two-factor authentication (2FA) for added security.
          </p>

          <p>
            Can I convert Monero directly to fiat currency?<br />
            Only a few platforms offer direct fiat conversion. Typically, users exchange Monero to a
            more liquid cryptocurrency like Bitcoin before converting to fiat.
          </p>
        </section>
      </>
    );
  }
}
