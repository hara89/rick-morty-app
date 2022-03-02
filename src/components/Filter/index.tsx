import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBox = styled.input`
  width: 100%;
  border: 3px solid rgb(60, 62, 68);
  margin: 32px 0 16px;
  padding: 6px 8px;
  font-size: 18px;
  color: #f5f5f5;
  background-color: rgb(36, 40, 47);
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding-bottom: 1rem;
`;

const Label = styled.label`
  color: #646464;
  font-size: 18px;
  width: 50px;
`;

const Select = styled.select`
  width: 80%;
  padding: 6px 8px;
  font-size: 12px;
  color: #f5f5f5;
  background-color: rgb(36, 40, 47);
  border: 2px solid rgb(60, 62, 68);

  option {
    font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
  }
`;

interface IFilterProps {
  handleFilter: any;
}

const Filter: React.FC<IFilterProps> = ({ handleFilter }) => {
  const handleInputChange = (event: any) => {
    handleFilter({
      value: event.target.value,
      key: event.target.id,
    });
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <SearchBox
        id="searchBox"
        name="searchBox"
        type="text"
        onChange={handleInputChange}
        placeholder="Filter By Name"
        autoFocus
      />
      <SelectWrapper>
        <Label>Status</Label>
        <Select id="status" name="status" onChange={handleInputChange}>
          <option value="all">All</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </Select>
      </SelectWrapper>
      <SelectWrapper>
        <Label>Gender</Label>
        <Select id="gender" name="gender" onChange={handleInputChange}>
          <option value="all">All</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="unknown">Unknown</option>
        </Select>
      </SelectWrapper>
    </StyledForm>
  );
};

export default Filter;
