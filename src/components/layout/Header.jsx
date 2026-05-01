import React from 'react'
import Container from '../common/Container'
import Button from '../common/Button'

export default function Header() {
    return (
        <>
        <header>
            <Container>
                <div className="flex mt-5">
                    <h3>Hello</h3>
                    <Button btnText={'Contact Us'}/>
                </div>
            </Container>
        </header>
        </>
    )
}
