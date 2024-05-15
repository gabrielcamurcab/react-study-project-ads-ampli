function Footer({nome}) {
    return (
        <footer className="container">
            <p className="texto-rodape">{nome}. Todos os direitos reservados&copy;.</p>
        </footer>
    );
}

export default Footer;