class Ajax {
    constructor() {
        this.headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
        this.controller = new AbortController();
    }

    /**
     * [get Petición GET a un servicio]
     * @param  {string} url [Link o dominio para realizar la petición GET]
     * @param  {object} options [Objeto para configurar parámetros de la petición GET]
     * @param  {string} format [El formato de salida que deseas tener]
     * @return {object}  [Retorna un objeto, dependiendo del estado de la petición]
     */
    async get(url, options = {}, parseToJson = true, format = "json") {
        if (this._isValidFormat(format)) {
            try {
                const response = await this._fetch("GET", url, {
                    options,
                    parseToJson,
                    format,
                });
                return response;
            } catch (err) {
                return this._showError(err, "GET");
            }
        }
    }

    /**
     * [post Petición POST a un servicio]
     * @param  {string} url [Link o dominio para realizar la petición POST]
     * @param  {object} data [Los datos a enviar, estos se trasforman automaticamente a JSON]
     * @param  {object} options [Objeto para configurar parámetros de la petición POST]
     * @param  {string} format [El formato de salida que deseas tener]
     * @return {object}  [Retorna un objeto, dependiendo del estado de la petición]
     */
    async post(
        url,
        data = {},
        options = {},
        parseToJson = true,
        format = "json"
    ) {
        if (this._isValidFormat(format)) {
            try {
                const response = await this._fetch("POST", url, {
                    options,
                    data,
                    parseToJson,
                    format,
                });
                return response;
                
            } catch (err) {
                return this._showError(err, "POST");
            }
        }
    }

    /**
     * [post Petición DELETE a un servicio]
     * @param  {string} url [Link o dominio para realizar la petición POST]
     * @param  {object} data [Los datos a enviar, estos se trasforman automaticamente a JSON]
     * @param  {object} options [Objeto para configurar parámetros de la petición POST]
     * @param  {string} format [El formato de salida que deseas tener]
     * @return {object}  [Retorna un objeto, dependiendo del estado de la petición]
     */
    async delete(
        url,
        data = {},
        options = {},
        parseToJson = true,
        format = "json"
    ) {
        if (this._isValidFormat(format)) {
            try {
                const response = await this._fetch("DELETE", url, {
                    options,
                    data,
                    parseToJson,
                    format,
                });
                return response;
            } catch (err) {
                return this._showError(err, "DELETE");
            }
        }
    }

    /**
     * [Petición PUT a un servicio]
     * @param  {string} url [Link o dominio para realizar la petición POST]
     * @param  {object} data [Los datos a enviar, estos se trasforman automaticamente a JSON]
     * @param  {object} options [Objeto para configurar parámetros de la petición POST]
     * @param  {string} format [El formato de salida que deseas tener]
     * @return {object}  [Retorna un objeto, dependiendo del estado de la petición]
     */
    async put(
        url,
        data = {},
        options = {},
        parseToJson = true,
        format = "json"
    ) {
        if (this._isValidFormat(format)) {
            try {
                const response = await this._fetch("PUT", url, {
                    options,
                    data,
                    parseToJson,
                    format,
                });
                return response;
            } catch (err) {
                return this._showError(err, "PUT");
            }
        }
    }

    _isValidFormat(format = "") {
        format = format.toLowerCase();
        if (format === "json" || format === "text" || format === "blob") {
            return true;
        }
        throw new Error(
            `Propiedad [${format}] no soportada. solo se acepta json|text|blob`
        );
    }

    /**
     * Representa una peticion a un servidor
     * @param  {string} method Verbo HTTP a usar
     * @param  {string} url URL a donde pedir los datos
     * @param  {Object} data Datos a enviar, si `parseToJson` es `True`, `data` se parsea a JSON, de lo contrario se pasa como `Object`
     * @param  {Object} options es un objeto con propiedades opciones dentro de la peticion, puede ser un token o un objeto `AbortController`
     * @param  {Headers} headers Cabeceras de la peticion
     * @param  {boolean} parseToJson indica si se quiere parsear a JSON, por defecto se parsea
     * @param  {string} format formato de salida de la peticion: `blob`, `json`, `text`
     * @return {object}  [Retorna un objeto, dependiendo del estado de la petición]
     */
    async _fetch(
        method,
        url,
        {
            data = {},
            options = {},
            hasHeaders = true,
            headers = this.headers,
            parseToJson = true,
            format = "json",
        } = {}
    ) {
        method = method.toUpperCase();
        // set all the config fetch(url, {config} )
        const config = {
            headers: {
                ...(options.token && {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }),
            },
            method,
            mode: "cors",
            signal: options.signal || this.controller.signal,
            ...options,
        };

        if (hasHeaders) {
            config.headers = {
                ...config.headers,
                ...headers,
            };
        }

        if (method !== "GET")
            config.body = parseToJson ? JSON.stringify(data) : data;

        let response;
        try {
            response = await fetch(url, config);
        } catch ({message}) {
            console.error("error haciendo fetch en _fetch", message)
        }

        const cleanData = await response[format]();

        // all good
        if (response.ok) return cleanData;

        return {
            data: cleanData.data,
            status: response.status,
            origin: response.url,
            error: true,
        };
    }

    _showError(error, method) {
        if (error.name !== "AbortError") {
            console.error(
                `%c⚠ Error pidiendo datos con metodo: [${method}]`,
                "color: red; font-size: 20px; font-family: Arial, monospace"
            );
            return {
                netWorkError: true,
                data: {},
            };
        }
        return {
            error: true,
        };
    }

    cancelRequests() {
        console.log("\n\n se llamó a cancelRequests()");
        this.controller.abort();
    }
}

export default new Ajax();