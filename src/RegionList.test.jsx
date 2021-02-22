import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import RegionList from './RegionList';

describe('RegionContainer', () => {
  const handleClick = jest.fn();

  const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '인천' },
  ];

  it('지역들을 보여준다.', () => {
    const { queryByText } = render(
      <RegionList
        regions={regions}
        onClick={handleClick}
      />,
    );
    expect(queryByText('서울')).toBeInTheDocument();
    expect(queryByText('인천')).toBeInTheDocument();
  });

  it('지역을 클릭하면 handleClick함수가 실행된다.', () => {
    const { queryByText } = render(
      <RegionList
        regions={regions}
        onClick={handleClick}
      />,
    );
    fireEvent.click(queryByText('서울'));
    expect(handleClick).toBeCalled();
  });
});
