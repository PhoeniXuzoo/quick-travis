import React from 'react'
import { render, fireEvent, waitFor, screen, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from './Home'

function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
}

test('works', async () => {
    const { getByTestId } = render(<Home />)

    // if input is empty.
    fireEvent.click(screen.getByTestId('submitBtn'));
    const Data = await waitForElement(() => getByTestId('Data'));
    expect(Data).toHaveTextContent('illegal');

    // if input is A00147
    fireEvent.change(screen.getByTestId('idocNumberInput'), {target : { value : 'A00147'}});
    fireEvent.click(screen.getByTestId('submitBtn'));
    const Data1 = await waitForElement(() => getByTestId('Data'));
    expect(Data1).toHaveTextContent('A00147');

    // if input is A00367
    fireEvent.change(screen.getByTestId('idocNumberInput'), {target : { value : 'A00367'}});
    fireEvent.click(screen.getByTestId('submitBtn'));
    const Data2 = await waitForElement(() => getByTestId('Data'));
    expect(Data2).toHaveTextContent('A00367');

    // if input is A01054
    fireEvent.change(screen.getByTestId('idocNumberInput'), {target : { value : 'A01054'}});
    fireEvent.click(screen.getByTestId('submitBtn'));
    const Data3 = await waitForElement(() => getByTestId('Data'));
    expect(Data3).toHaveTextContent('A01054');

    // if input is random number
    fireEvent.change(screen.getByTestId('idocNumberInput'), {target : { value : randomNum(1, 10000)}});
    fireEvent.click(screen.getByTestId('submitBtn'));
    const Data4 = await waitForElement(() => getByTestId('Data'));
    expect(Data4).toHaveTextContent('illegal');
  })