class Media {
  constructor(title){
  this._title = title;
  this._isCheckedOut = false;
  this._ratings = [];
  }
  
  get title () {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
    }
  
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }
  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }
  getAverageRating() {
    letRatingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
    return ratingsSum / this.ratings.length;
  }
  addRating(value) {
    this.rat
    }
  }
  
  class Book extends Media {
  
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  class Movie extends Media {
      constructor(director, title, runtime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
      }
      get director() {
        return this._director;
      }
      get runTime() {
        return this._runTime;
      }
    }
    const historyOfEverything = new Book('Bill Bryson', 'A short History of Nearly Everything', 544);
    historyOfEveryathing.toggleCheckOutStatus();
    console.log(historyOfEverything);
    historyOfEverything.addRating(4);
    historyOfEverything.addRating(5);
    historyOfEverything.addRating(5);
    console.log(historyOfEverthing.getAverageRating());
    const speed = new Movie()
  
  }