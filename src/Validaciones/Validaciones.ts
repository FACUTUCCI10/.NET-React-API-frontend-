export function primeraLetraMayuscula() {
    return {
        name: 'primera-letra-mayuscula',
        message: 'La primera letra debe ser mayúscula',
        test: function (value: string | null | undefined) {
            if (!value || value.length === 0) {
                return true;
            }
            const primeraLetra = value[0];
            return primeraLetra === primeraLetra.toUpperCase();
        }
    };
}
