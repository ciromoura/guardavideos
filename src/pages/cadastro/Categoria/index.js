import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';
import styled from 'styled-components';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const Table = styled.table`
    border: 1px solid black;
    border-collapse: collapse;
`;
const TH = styled.th`
    border: 1px solid black;
    border-collapse: collapse;
    padding: 8px;
    text-align: left;
`;
const TD = styled.td`
    border: 1px solid black;
    border-collapse: collapse;
    padding: 8px;
    text-align: left;
`;

function CadastroCategoria() {
    const valoresIniciais = {
        titulo: '',
        linkExtra: '',
        linkExtraTexto: '',
        cor: '',
    };

    const { handleChange, values, clearForm } = useForm(valoresIniciais);

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const URL_TOP = window.location.hostname.includes('localhost')
            ? 'http://localhost:8080/categorias'
            : 'https://guardavideos.herokuapp.com/categorias';

        fetch(URL_TOP)
            .then(async (respostaDoServidor) => {
                const resposta = await respostaDoServidor.json();
                setCategorias([
                    ...resposta,
                ]);
            });

    }, []);

    return (
        <PageDefault>
            <h1>
                Cadastro de Categoria:
        {values.titulo}
            </h1>

            <form onSubmit={(event) => {
                event.preventDefault();


                categoriasRepository.create({
                    titulo: values.titulo,
                    cor: values.cor,
                    link_extra: {
                        text: values.linkExtraTexto,
                        url: values.linkExtra
                    }
                })
                    .then(() => {
                        console.log('Cadastrou com sucesso!');
                    });

                setCategorias([
                    ...categorias,
                    values,
                ]);

                clearForm();
            }}
            >

                <FormField
                    label="Título da Categoria"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />

                <FormField
                    label="Extra - link"
                    name="linkExtra"
                    value={values.linkExtra}
                    onChange={handleChange}
                />

                <FormField
                    label="Extra - Descrição"
                    name="linkExtraTexto"
                    value={values.linkExtraTexto}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                <Button type="submit">
                    Cadastrar
                </Button>
            </form>

            {categorias.length === 0 && (
                <div> Loading... </div>
            )}
            <hr style={{
                margin: '30px 0',
                borderColor: 'var(--primary)'
            }} />
            <h3> Categorias cadastradas: </h3>
            <Table>
                <tr>
                    <TH>Título</TH>
                    <TH>Opções</TH>
                </tr>
                {categorias.map((categoria) => (
                    <tr>
                        <TD key={`${categoria.titulo}`} style={{ color: categoria.cor }}>
                            {categoria.titulo}
                        </TD>
                        <TD style={{ textAlign: 'center' }}>
                            < FaEdit style={{ marginRight: '16px' }} />
                            < FaTrashAlt />
                        </TD>
                    </tr>
                ))}
            </Table>
            <br />
            <br />
            <Link className="ButtonLink" to="/">
                Ir para home
            </Link>
            <br />
            <br />
        </PageDefault>
    );
}

export default CadastroCategoria;