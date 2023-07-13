import { Component } from 'react';
import { Input, SearchButton, SearchForm } from './Searchbar.styled';

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
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <span>Search</span>
          </SearchButton>

          <Input
            name="searchText"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </header>
    );
  }
}

export default Searchbar;
