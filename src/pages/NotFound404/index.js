import React from 'react';
import PageDefault from '../../components/PageDefault';

function NotFound404() {
    return (
        <PageDefault paddingAll={0}>
            <div style={{ position: 'relative' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center'
                }}>
                    <h1 style={{ color: 'var(--primary)' }}>
                        404
                    </h1>
                    Página não encontrada!
                </div>
            </div>
        </PageDefault>
    );
}

export default NotFound404;