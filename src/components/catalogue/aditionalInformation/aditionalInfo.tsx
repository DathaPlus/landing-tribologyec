'use client';

export const AditionalInfo = () => {
    return (
        <div className="additional-info">
            <h3 className="additional-info__title">Información adicional</h3>
            <table className="additional-info__table">
                <tbody>
                <tr>
                    <td>Peso</td>
                    <td>6.8 kg</td>
                </tr>
                <tr>
                    <td>Marca</td>
                    <td>Norbar</td>
                </tr>
                <tr>
                    <td>Modelo</td>
                    <td>EBT-80-2700</td>
                </tr>
                <tr>
                    <td>Capacidad</td>
                    <td>676-2700[Nm]</td>
                </tr>
                <tr>
                    <td>Certificación</td>
                    <td>Sí</td>
                </tr>
                <tr>
                    <td>Precisión</td>
                    <td>+/- 3%</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};
