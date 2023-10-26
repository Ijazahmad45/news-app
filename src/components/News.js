import React, { Component } from "react";
import NewsItems from "./NewsItems";
import PropTypes from 'prop-types';

export class News extends Component {
  article = [
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title:
        "Israel-Hamas war: List of key events, day 12 - Al Jazeera English",
      description:
        "As the conflict between Israel and Gaza enters its 12th day, these are the main developments.",
      url: "https://www.aljazeera.com/news/2023/10/18/israel-hamas-war-list-of-key-events-day-12",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/10/2023-10-17T192429Z_1398659289_RC2JU3AXDANY_RTRMADP_3_ISRAEL-PALESTINIANS-JORDAN-PROTESTS-1697578201.jpg?resize=1920%2C1440",
      publishedAt: "2023-10-18T05:56:14Z",
    },
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "",
      title:
        "Sorting out NFL contenders and pretenders: Playoff picture entering Week 7 includes legit teams and frauds - CBS Sports",
      description:
        "Who's for real and who's not among teams currently in the NFL playoff picture",
      url: "https://www.cbssports.com/nfl/news/sorting-out-nfl-contenders-and-pretenders-playoff-picture-entering-week-7-includes-legit-teams-and-frauds/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2023/10/17/22883cf3-e0d7-41ca-89c5-217428cad334/thumbnail/1200x675/808d1e8c322b7492d3f8dd000f4db247/ljax.jpg",
      publishedAt: "2023-10-18T05:28:00Z",
      content:
        "We are one-third of the way through the 2023 NFL season. Can you believe it? Through six weeks, we've seen surprises, disappointments, upsets and dominant performances. It's still relatively early, b… [+10827 chars]",
    },
    {
      author: "Laura He",
      title:
        "China's economy regains momentum. But real estate remains a drag - CNN",
      description:
        "China’s economy expanded by 4.9% in the third quarter, compared to a year ago, the National Bureau of Statistics said on Wednesday.",
      url: "https://www.cnn.com/2023/10/17/economy/china-q3-gdp-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/231017192222-china-real-estate-construction.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-10-18T07:47:00Z",
      content:
        "Editors Note: Sign up for CNNs Meanwhile in China newsletter which explores what you need to know about the countrys rise and how it impacts the world.\r\nChinas economy has regained momentum in the th… [+4640 chars]",
    },
  ];

  static defaultProps ={
    country: 'in',
    pageSize: 5,
    category: 'general'
  }
  static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }


  constructor() {
    super();
    this.state = {
      article: this.article,
      loading: false,
      page: 1,

    };
  }
  async componentDidMount() {
    try {
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4e09325528ec468b8aa69a0d0d8d71c9&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true}); 
      let data = await fetch(url);
      let parsedData = await data.json();

      if (parsedData.articles) {
        this.setState({ article: parsedData.articles, 
                        totalResults:parsedData.totalResults,
                        loading: false 
                      });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  handlePrevClick = async ()=>{
       console.log("Previous");
      
            try {
              let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4e09325528ec468b8aa69a0d0d8d71c9&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
              let data = await fetch(url);
              this.setState({loading:true});
              let parsedData = await data.json();
              

              if (parsedData.articles) {
              this.setState({
                  page: this.state.page - 1,
                  article: parsedData.articles, loading: false
                })
              }
              } catch (error) {
              console.error("Error fetching data:", error);
              }
            
          } 
        
          
  handleNextClick = async ()=>{
    console.log("Next");
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

              try {
              let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4e09325528ec468b8aa69a0d0d8d71c9&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
              this.setState({loading:true});
              let data = await fetch(url);
              let parsedData = await data.json();
              

              if (parsedData.articles) {
              this.setState({
                  page: this.state.page + 1,
                  article: parsedData.articles, loading: false
                })
              }
              } catch (error) {
              console.error("Error fetching data:", error);
              }
        }
      }
    

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin:'35px 0px'}}>NewsMonkey - Top Headlines</h1>

       {this.state.loading && <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>}

        <div className="row" >
          {!this.state.loading && this.state.article.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
                <div className="container d-flex justify-content-between">
                  <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous </button>
                  <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>
                </div>
      </div>
    );
  }
}

export default News;
