import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spiner from './Spiner';
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps={
    country:"in",
    pazeSize:8,
    category:"general"
  }
  static propTypes={
    country:PropTypes.string,
    pazeSize:PropTypes.number,
    category:PropTypes.string
  }
   


  constructor() {
    super();


    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9c4b200179ff4b5bbdcef8b6c0da9db3&page=1&pageSize=${this.props.pazeSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let passedData = await data.json()
    console.log(passedData)
    this.setState({ articles: passedData.articles,loading:false })
    
  }

  handleNext = async () => {
    console.log("Next click button");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pazeSize))) {
               
     
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9c4b200179ff4b5bbdcef8b6c0da9db3&page=${this.state.page+1}&pageSize=${this.props.pazeSize}`;
       
        this.setState({loading:true});
        let data = await fetch(url);
        let passedData = await data.json()
        
        this.setState({ articles: passedData.articles, totalResults: passedData.totalResults })
        this.setState({
          page: this.state.page + 1,
          loading:false
        })
    }
  }
handlePrev = async () => {
  console.log("Prev click button")
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9c4b200179ff4b5bbdcef8b6c0da9db3&page=${this.state.page-1}&pageSize=${this.props.pazeSize}`;
  this.setState({loading:true});
  let data = await fetch(url);
  let passedData = await data.json()
  console.log(passedData)
  this.setState({ articles: passedData.articles })
  this.setState({
    page: this.state.page - 1,
    loading:false
  })
}
render() {
  return (
    <div className='container my-3 '>
      <h2 className='text-center'>Vivekinfotech-Top Headline</h2>
      {this.state.loading && <Spiner/>}
      <div className="row">
        {this.state.articles.map((eliments) => {
          return <div className='col-md-4' key={eliments.url}>
            <NewsItems title={eliments.title ? eliments.title.slice(0, 44) : ""} descrpstion={eliments.description ? eliments.description.slice(0, 88) : ""} imagurl={eliments.urlToImage ? eliments.urlToImage : "https://c.ndtvimg.com/2024-01/dplghfhk_ram-temple-celebrations_625x300_23_January_24.jpeg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20240117.06"} newsurl={eliments.url} />
          </div>
        })};





      </div>
      <div className="container d-flex justify-content-between">
        <button type='button' className='btn btn-dark' disabled={this.state.page <= 1} onClick={this.handlePrev}>&larr;Preview</button>
        <button type='button' className='btn btn-dark'disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pazeSize )} onClick={this.handleNext}>Next &rarr;</button>
      </div>
    </div>
  )
}
}
