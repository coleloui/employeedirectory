import React, { Component } from "react";
import Container from "./Container";
import Table from "./Table";
import Col from "./Col";
import Row from "./Row";
import PersonDetail from "./PersonDetail";
import SearchPerson from "./SearchPerson";
import API from "../utils/API";

class People extends Component {
  state = {
    peoples: [],
    results: [],
    search: "",
    sorted: false,
  };

  componentDidMount() {
    this.displayAll();
  }

  displayAll = () => {
    API.search()
      .then((res) =>
        this.setState({ peoples: res.data.results, results: res.data.results })
      )
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    event.preventDefault();
    this.searchPerson(event.target.value);
  };

  searchPerson = (name) => {
    const FilterPeople = this.state.peoples.filter((person) => {
      const test = `${person.name.first} ${person.name.last}`
        .toLocaleLowerCase()
        .includes(name.toLocaleLowerCase());
      console.log(test);
      return test;
    });
    this.setState({ results: FilterPeople });
  };

  sort = () => {
    if (!this.state.sorted) {
      this.setState({
        sorted: true,
        results: this.state.results.sort(function (a, b) {
          if (a.name.first < b.name.first) {
            return -1;
          }
          if (a.name.first > b.name.first) {
            return 1;
          }
          return 0;
        }),
      });
    } else {
      this.setState({ results: this.state.results.reverse() });
    }
  };

  render() {
    return (
      <Container>
      <div
      class="jumbotron border border-danger text-center bg-dark text-white bold"
    >
      Employee Directory
    </div>
        <Row>
          <SearchPerson
            peoples={this.state.results}
            handleInputChange={this.handleInputChange}
          />
          <Col size="md-8">
            <Table sort={this.sort}>
              {this.state.results.map((person, key) => (
                <PersonDetail
                  firstname={person.name.first}
                  lastname={person.name.last}
                  email={person.email}
                  phone={person.phone}
                  src={person.picture.thumbnail}
                  key={key}
                />
              ))}
            </Table>
          </Col>
          <Col size="md-4"></Col>
        </Row>
      </Container>
    );
  }
}

export default People;
