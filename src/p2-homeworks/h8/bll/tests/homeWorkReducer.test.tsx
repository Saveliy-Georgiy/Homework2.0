import React from 'react'
import {checkAgeAC, homeWorkReducer, sortDownAC, sortUpAC} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[]

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, sortUpAC('up'))

    console.log(newState)
    expect(newState[0]).toStrictEqual({_id: 1, name: 'Александр', age: 66})
    expect(newState[1]).toStrictEqual( {_id: 3, name: 'Виктор', age: 44})
    expect(newState[2]).toStrictEqual({_id: 4, name: 'Дмитрий', age: 40})
    expect(newState.length).toBe(6)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, sortDownAC('down'))

    expect(newState[0]).toStrictEqual({_id: 0, name: 'Кот', age: 3})
    expect(newState[1]).toStrictEqual( {_id: 2, name: 'Коля', age: 16})
    expect(newState[2]).toStrictEqual({_id: 5, name: 'Ирина', age: 55})
    expect(newState.length).toBe(6)
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, checkAgeAC(18))

    expect(newState[0]).toStrictEqual({_id: 1, name: 'Александр', age: 66})
    expect(newState[1]).toStrictEqual( {_id: 3, name: 'Виктор', age: 44})
    expect(newState[2]).toStrictEqual({_id: 4, name: 'Дмитрий', age: 40})
    expect(newState[3]).toStrictEqual({_id: 5, name: 'Ирина', age: 55})
    expect(newState.length).toBe(4)
})
