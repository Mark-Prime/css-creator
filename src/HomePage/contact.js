import React from 'react';
import styled from 'styled-components';
import { useForm, ValidationError } from '@formspree/react';
import Header from '../Components/Cyberpunk/Header';

// * colors:
let colorBg = "#21006f"
let colorBg2 = "#450eff"
let colorHighlight = "#ff911a"
let colorPrimary = "#fe3218"
let colorSecondary = "#e100f5"

const Wrapper = styled.div`
    background-color: black;
    background-image: radial-gradient(
        ellipse at 5% -13%,
        ${colorBg2} 0%,
        transparent 50%),
        radial-gradient(
            ellipse at 95% -5%,
            ${colorBg2} 0%,
            transparent 30%);
    position: relative;
`

const Container = styled.div`
    height 100%;
    padding: 8rem 0;
    position: relative;
    z-index: 1;
    background: ${colorSecondary};
    clip-path: polygon(
        100% 0,
        100% 100%,
        0 100%,
        0 5rem
        );

    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &::after {
        content: "";
        background-color: black;
        background-image: radial-gradient(
            circle at 50% 50%,
            ${colorBg} 0%,
            transparent 60%);
        background-repeat: no-repeat;
        position: absolute;
        z-index: -1;
        top: 1rem;
        left: 0;
        width: 100%;
        height: 100%;

        clip-path: polygon(
            100% 0,
            100% 100%,
            0 100%,
            0 5rem
            );
    }
`

const Form = styled.form`
    max-width: 600px;
    background: rgba(0,0,0,0.3);
    border: 1px solid ${colorPrimary};

    padding: 1.3rem;
    position: relative;
    left: -8px;

    font-family: 'IBM Plex Sans', sans-serif;

    box-shadow: 0 0 3px ${colorPrimary};

    clip-path: polygon(
        0 0,
        50% 0,
        calc(50% + 1rem) 1rem,

        calc(50% + 3rem) 1rem,
        calc(50% + 3rem) .8rem,
        calc(50% + 2rem) 0rem,
        calc(50% + 4rem) 0rem,
        calc(50% + 5rem) .8rem,
        calc(50% + 3rem) .8rem,
        calc(50% + 3rem) 1rem,

        calc(50% + 6rem) 1rem,
        calc(50% + 6rem) .8rem,
        calc(50% + 5rem) 0rem,
        calc(50% + 7rem) 0rem,
        calc(50% + 8rem) .8rem,
        calc(50% + 6rem) .8rem,
        calc(50% + 6rem) 1rem,

        calc(50% + 9rem) 1rem,
        calc(50% + 9rem) .8rem,
        calc(50% + 8rem) 0rem,
        calc(50% + 10rem) 0rem,
        calc(50% + 11rem) .8rem,
        calc(50% + 9rem) .8rem,
        calc(50% + 9rem) 1rem,

        calc(50% + 12rem) 1rem,
        calc(50% + 12rem) .8rem,
        calc(50% + 11rem) 0rem,
        calc(50% + 13rem) 0rem,
        calc(50% + 14rem) .8rem,
        calc(50% + 12rem) .8rem,
        calc(50% + 12rem) 1rem,

        calc(100% - 1rem - 1px) 1rem,
        calc(100% - 1px) 0,
        100% 0,
        100% 100%,
        0 100%
        );

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        background: ${colorPrimary};
        position: absolute;
        left: 0;
        top: 0;

        clip-path: polygon(
            50% 0,
            100% 0,
            calc(100% - 1rem) 1rem,
            calc(50% + 1rem) 1rem
            );
    }
`

const Input = styled.input`
    width: 100%;
    margin-bottom: 1rem;
    font-family: 'IBM Plex Sans', sans-serif;
    padding: 3px;
    margin-top: 5px;

    outline: none;
    border: 1px solid ${colorHighlight};
    color: white;

    background: rgba(0,0,0,.3);
`

const Label = styled.label`
    font-size: 1.1rem;
    text-align: center;
    color: ${colorHighlight};
    text-shadow: 0px 0px 5px ${colorHighlight};
    font-family: 'Major Mono Display', sans-serif;
    font-weight: 100;
`

const Textarea = styled.textarea`
    background: linear-gradient(-45deg, ${colorHighlight} 0%, ${colorHighlight} .8rem, rgba(0,0,0,.3) .8rem);
    width: 100%;
    padding: 3px;
    resize:vertical;
    font-family: 'IBM Plex Sans', sans-serif;
    margin-top: 5px;

    min-height: 2rem;

    outline: none;
    border: 1px solid ${colorHighlight};
    color: white;

    clip-path: polygon(
        0 0,
        100% 0,

        100% calc(100% - 1.2rem),

        100% calc(100% - 1rem),
        100% 100%,
        calc(100% - 1rem) 100%,
        100% calc(100% - 1rem),

        100% calc(100% - 1.2rem),
        calc(100% - 1.2rem) 100%,
        0% 100%
    );
`

const Button = styled.button`
    font-size: 1.1rem;
    text-align: center;
    color: ${colorHighlight};
    text-shadow: 0px 0px 5px ${colorHighlight};
    font-family: 'Major Mono Display', sans-serif;
    font-weight: 100;
    margin-top: 5px;

    padding: .5rem 3.5rem .5rem .5rem;

    position: relative;
    background: rgba(0,0,0,.3);
    outline: none;
    border: 1px solid ${colorHighlight};

    transition: all .1s;

    cursor: pointer;

    clip-path: polygon(
        0 0,

        calc(100% - 3rem) 0,
        calc(100% - 2rem) 50%,
        calc(100% - 3rem) 100%,
        
        calc(100% - 2.5rem) 100%,
        calc(100% - 1.5rem) 50%,
        calc(100% - 2.5rem) 0%,
        
        calc(100% - 2rem) 0,
        calc(100% - 1rem) 50%,
        calc(100% - 2rem) 100%,

        calc(100% - 1.5rem) 100%,
        calc(100% - 0.5rem) 50%,
        calc(100% - 1.5rem) 0%,
        
        calc(100% - 1rem) 0,
        calc(100% - 0rem) 50%,
        calc(100% - 1rem) 100%,

        0% 100%
    );

    &:after {
        content: '';
        width: 100%;
        height: 100%;

        position: absolute;
        top: 0;
        left: 0;

        background: ${colorHighlight};

        clip-path: polygon(
            calc(100% - 3rem) 0,
            100% 0,
            100% 100%,
            calc(100% - 3rem) 100%,
            calc(100% - 2rem) 50%
        );
    }

    &:hover {
        padding-right: 4rem;
    }
`

function Contact() {
  const [state, handleSubmit] = useForm("xrgykppq");
  if (state.succeeded) {
      return <p>I'll get back to you as soon as I can!</p>;
  }
  return (
      <Wrapper>
            <Container>
                <Header>contact me</Header>
                <Form onSubmit={handleSubmit}>
                    <Label htmlFor="email">
                        email address
                    </Label>
                    <Input
                        id="email"
                        type="email" 
                        name="email"
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <Label htmlFor="message">
                        message
                    </Label>
                    <Textarea
                        id="message"
                        name="message"
                        rows="4"
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <Button type="submit" disabled={state.submitting}>
                        send
                    </Button>
                </Form>
            </Container>
      </Wrapper>
  );
}

export default Contact;