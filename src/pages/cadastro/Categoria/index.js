import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
    const valoresIniciais = {
        titulo: '',
        descricao: '',
        cor: '',
    };

    const { handleChange, values, clearForm } = useForm(valoresIniciais);

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const URL_TOP = window.location.hostname.includes('localhost')
            ? 'http://localhost:8080/categorias'
            : 'https://guardavideos.herokuapp.com/categorias';
        // E a ju ama variáveis
        fetch(URL_TOP)
            .then(async (respostaDoServidor) => {
                const resposta = await respostaDoServidor.json();
                setCategorias([
                    ...resposta,
                ]);
            });

        // setTimeout(() => {
        //   setCategorias([
        //     ...categorias,
        //     {
        //       id: 1,
        //       nome: 'Front End',
        //       descricao: 'Uma categoria bacanudassa',
        //       cor: '#cbd1ff',
        //     },
        //     {
        //       id: 2,
        //       nome: 'Back End',
        //       descricao: 'Outra categoria bacanudassa',
        //       cor: '#cbd1ff',
        //     },
        //   ]);
        // }, 4 * 1000);
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
                    cor: values.cor
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
                    label="Descrição"
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
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
                <div>
                    {/* Cargando... */}
          Loading...
                </div>
            )}

            <ul>
                {categorias.map((categoria) => (
                    <li key={`${categoria.titulo}`} style={{ color: categoria.cor }}>
                        {categoria.titulo}
                    </li>
                ))}
            </ul>
            <br />
            <br />
            <Link to="/">
                Ir para home
            </Link>
            <br />
            <br />
        </PageDefault>
    );
}

export default CadastroCategoria;