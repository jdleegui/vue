import React from 'react';
import { BrowserRouter, MemoryRouter, HashRouter, Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import 'jest-styled-components';
import '@testing-library/jest-dom';

describe('aa 테스트', () => {
  beforeAll((done) => {
    // This code will be called just once before all it statements
    done();
  });
  beforeEach((done) => {
    // This code will be called many times before all it statements
    done();
  });
  afterAll((done) => {
    // This code will be called just once after all it statements
    done();
  });
  afterEach((done) => {
    // This code will be called many times after all it statements
    done();
  });

  // https://github.com/testing-library/jest-dom
  // Assertion Matcher
  // . expect(OBJECT).toBe()                   : 기본 타입 값 비교
  // . expect(OBJECT).toBeCloseTo()            : 기본 타입 값을 근사치로 비교
  // . expect(OBJECT).not                      : 불일치 여부 확인
  // . expect(OBJECT).toEqual()                : 객체 타입 값 비교
  // . expect(OBJECT).toStrictEqual()          : 객체 타입 값 비교
  // . expect(OBJECT).toBeNull()               : null 여부 만 확인
  // . expect(OBJECT).toBeUndefined()          : undefined 여부 만 확인
  // . expect(OBJECT).toBeDefined()            : toBeUndefined의 반대 경우 확인
  // . expect(OBJECT).toBeTruthy()             : true로 취급되는 구문을 확인
  // . expect(OBJECT).toBeFalsy()              : false로 취급되는 구문을 확인
  // . expect(OBJECT).toBeGreaterThan()         : 큰 숫자 여부 확인
  // . expect(OBJECT).toBeGreaterThanOrEqual() : 같거나 큰 숫자 여부 확인
  // . expect(OBJECT).toBeLessThan()           : 작은 숫자 여부 확인
  // . expect(OBJECT).toBeLessThanOrEqual()    : 같거나 작은 숫자 여부 확인
  // . expect(OBJECT).toMatch()                : 정규식을 이용해서 문자열의 일치 여부 확인
  // . expect(OBJECT).toContain()              : Array 또는 iteration이 가능한 (Set, Map 등...) 객체에 특정 요소 포함 여부를 확인
  // . expect(OBJECT).toThrow()                : 에러 발생 여부 확인

  // Testing Queries 메서드 >>> https://testing-library.com/docs/queries/about/
  // . screen.getByText() : DOM 에서 text로 찾기
  // . screen.getAllByText() : DOM 에서 text로 찾기
  // . screen.getByAltText()
  // . screen.getByPlaceholderText()
  // . screen.getElementsByClassName()
  // . screen.getElementsByTagName()
  // . screen.queryByText()

  // element 중요 메서드
  // . getAttribute()
  // . toHaveStyleRule()
  // . toHaveLength()
  // . toHaveAttribute()
  // . toHaveTextContent()

  // 이벤트 발생 객체
  // . fireEvent()

  test('', (done) => {
    // Assertions
    done();
  });
});