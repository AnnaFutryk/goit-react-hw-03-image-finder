import { Component } from 'react';

class Searchbar extends Component {
  state = {
    searchText: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.searchText;
    this.props.onSubmit(value); //передаємо запит в арр
    e.target.reset();
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            name="searchText"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
