import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import useMedia from 'use-media';
import styled from 'styled-components';

import { MainLayout } from '../../layout';
import { CharacterList, Filter, Header, ScrollButton } from '../../components';
import { getCharacterList, setCurrentPageNumber } from '../../store/actions/character.action';
import { IState } from '../../types/state';

interface IStyledMainPageProps {
  isMenuOpened: boolean;
}

const StyledMainPage = styled.div<IStyledMainPageProps>`
  display: flex;
  flex-direction: row;

  .mainpage {
    &__sidebar {
      @media only screen and (max-width: 768px) {
        display: ${({ isMenuOpened }) => (!isMenuOpened ? 'block' : 'none')};
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
      }
      width: 30%;
      border-right: 2px solid ${({ theme }) => theme.color.primary};
      background-color: rgb(36, 40, 47);
      padding: 2em;
    }

    &__content {
      flex-direction: column;
      background-color: rgb(36, 40, 47);
      width: 70%;

      @media only screen and (max-width: 768px) {
        width: 100%;
        display: ${({ isMenuOpened }) => (isMenuOpened ? 'block' : 'none')};
      }

      &__character-list {
        display: flex;
        flex-wrap: wrap;
      }
      &__paginate {
        display: flex;
        flex-direction: row;
      }
    }
  }

  .pagination {
    margin: 15px auto;
    display: flex;
    list-style: none;
    outline: none;
  }
  .pagination > .active > a {
    background-color: ${({ theme }) => theme.color.primary};
    border-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
  }
  .pagination > li > a {
    border: 1px solid ${({ theme }) => theme.color.primary};
    padding: 0.5rem 1rem;
    outline: none;
    cursor: pointer;
  }
  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    background-color: ${({ theme }) => theme.color.primary};
    border-color: ${({ theme }) => theme.color.primary};
    outline: none;
  }
  .pagination > li > a,
  .pagination > li > span {
    color: ${({ theme }) => theme.color.primary};
  }
  .pagination > li:first-child > a,
  .pagination > li:first-child > span,
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-radius: unset;
  }
`;

const MainPage = () => {
  const dispatch = useDispatch();
  const isMobile = useMedia({ maxWidth: 768 });
  const characterList = useSelector((state: IState) => state.character.characterList);
  const pageInfo = useSelector((state: IState) => state.character.pageInfo);
  const currentPage = useSelector((state: IState) => state.character.currentPage);

  const [nameFilter, setNameFilter] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [genderFilter, setGenderFilter] = useState<string>('all');
  const [isMenuOpened, setIsMenuOpened] = useState(true);

  useEffect(() => {
    dispatch(getCharacterList(currentPage));
  }, []);

  const handleFilter = (filterData: any) => {
    if (filterData.key === 'searchBox') setNameFilter(filterData.value);
    else if (filterData.key === 'status') setStatusFilter(filterData.value);
    else if (filterData.key === 'gender') setGenderFilter(filterData.value);
  };

  const filteredChars = characterList
    .filter((char) => {
      return char.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter((char) => {
      if (statusFilter === 'all') return char;
      else return char.status === statusFilter;
    })
    .filter((char) => {
      if (genderFilter === 'all') return char;
      else return char.gender === genderFilter;
    });

  const handlePageClick = (e: any) => {
    const selectedPage = e.selected + 1;
    dispatch(setCurrentPageNumber(selectedPage));
    dispatch(getCharacterList(selectedPage));
  };

  const handleMenu = (isMenu: boolean) => {
    setIsMenuOpened(isMenu);
  };

  return (
    <MainLayout>
      <>
        <Header hasBack={false} hasMenu={true} handleMenu={handleMenu} />
        <StyledMainPage isMenuOpened={isMenuOpened}>
          <div className="mainpage__sidebar">
            <Filter handleFilter={handleFilter} />
          </div>
          <div className="mainpage__content">
            <div className="mainpage__content__character-list">
              <CharacterList filteredChars={filteredChars} />
            </div>
            <div className="mainpage__content__paginate">
              {pageInfo !== null && (
                <ReactPaginate
                  initialPage={currentPage - 1}
                  previousLabel={'prev'}
                  nextLabel={'next'}
                  breakLabel={isMobile ? '' : '...'}
                  breakClassName={'break-me'}
                  pageCount={Number(pageInfo.pages)}
                  marginPagesDisplayed={isMobile ? 0 : 2}
                  pageRangeDisplayed={isMobile ? 2 : 5}
                  onPageChange={handlePageClick}
                  containerClassName={'pagination'}
                  activeClassName={'active'}
                />
              )}
            </div>
          </div>
          <ScrollButton />
        </StyledMainPage>
      </>
    </MainLayout>
  );
};

export default MainPage;
