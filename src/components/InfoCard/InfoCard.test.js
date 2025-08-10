import { render, screen } from "@testing-library/react";
//import { toHaveNoViolations, axe } from 'jest-axe';
import InfoCard from "./InfoCard";

/* apply when the component is ready for accessibility testing

expect.extend(toHaveNoViolations())

test('InfoCard has no accessibility violations', async () => {
  const { container } = render(<InfoCard title="Hola" description="Mundo" />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
*/

describe('InfoCard component', () => {
  it('renders title and description when provided', () => {
    render(<InfoCard title="Test Title" description="Test Description" />)
    expect(screen.getByRole('heading',{level: 3})).toHaveTextContent('Test Title');
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });
});

it('renders without crashing when props are missing', () => {
    render(<InfoCard />) 
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
    expect(screen.queryByText(/./)).not.toBeInTheDocument()
})
