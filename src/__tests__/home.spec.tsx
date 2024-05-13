/**
 * @jest-environment jsdom
 */

import Home from "../pages/Home";
import { render } from '@testing-library/react'

describe('Home page', () => {
  it('Should render Home page', async () => {
    render(<Home />)
  })  
})