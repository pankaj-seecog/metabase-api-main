import Nav from 'react-bootstrap/Nav'

function MainMenu(){
    return(
        <>
            <Nav className="justify-content-end">
                <Nav.Item>
                    <Nav.Link href="/">Page1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/IssueMessage">Page2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Page3</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Page4</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default MainMenu;