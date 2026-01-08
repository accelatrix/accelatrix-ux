    interface HTMLElementConstructor {
        /**
         * Finds nested elements based on a selector.
         * @param selector The selector for nested elements.
         */
        Find(selector: string): HTMLElement[];
        /**
         * Create an HTML element.
         * @param tagName The tag type.
         */
        Create<K extends keyof HTMLElementTagNameMap>(tagName: K): HTMLElementTagNameMap[K];
    }
    /** Able to listen to HTML events. */
    interface IHtmlEventListener {
        /**
         * Adds an event listener.
         * @param event The event to subscribe.
         * @param handler The handler.
         */
        ListenToEvent<K extends keyof HTMLElementEventMap>(event: K, handler: (evt: DocumentEventMap[K]) => void): HTMLElement;
        /**
         * Adds an event listener.
         * @param event The event to subscribe.
         * @param name A name to which you can refer to in order to unsuncribe this particular handler at a future point.
         * @param handler The handler.
         */
        ListenToEvent<K extends keyof HTMLElementEventMap>(event: K, name: string, handler: (evt: DocumentEventMap[K]) => void): HTMLElement;
        /**
         * Adds an event listener.
         * @param event The event to subscribe.
         * @param name A name to which you can refer to in order to unsuncribe this particular handler at a future point.
         * @param placeFirst If this handler should be placed at the start of the stack of listeners.
         * @param handler The handler.
         */
        ListenToEvent<K extends keyof HTMLElementEventMap>(event: K, name: string, placeFirst: boolean, handler: (evt: DocumentEventMap[K]) => void): HTMLElement;
        /** Stops listening to all events. */
        StopEventListening(): HTMLElement;
        /**
         * Stops listening to all events.
         * @param propagateToChildren If the same operation should be conducted on all child elements.
         */
        StopEventListening(propagateToChildren: boolean): HTMLElement;
        /**
         * Stops listening to a specific type of event.
         * @param event The event to stop listening to.
         */
        StopEventListening<K extends keyof HTMLElementEventMap>(event: K): HTMLElement;
        /**
         * Stops listening to a specific type of event.
         * @param event The event to stop listening to.
         * @param propagateToChildren If the same operation should be conducted on all child elements.
         */
        StopEventListening<K extends keyof HTMLElementEventMap>(event: K, propagateToChildren: boolean): HTMLElement;
        /**
         * Stops listening to a specific type of event.
         * @param event The event to stop listening to.
         * @param name The given name for this event if one was given at the time of listening.
         */
        StopEventListening<K extends keyof HTMLElementEventMap>(event: K, name: string): HTMLElement;
        /**
         * Stops listening to a specific type of event.
         * @param event The event to stop listening to.
         * @param name The given name for this event if one was given at the time of listening.
         * @param propagateToChildren If the same operation should be conducted on all child elements.
         */
        StopEventListening<K extends keyof HTMLElementEventMap>(event: K, name: string, propagateToChildren: boolean): HTMLElement;
    }
    interface HTMLDocument extends IHtmlEventListener {
        /**
         * Finds nested elements based on a selector.
         * @param selector The selector for nested elements.
         */
        Find(selector: string): HTMLElement[];
        /**
         * Create an HTML element.
         * @param tagName The tag type.
         */
        Create<K extends keyof HTMLElementTagNameMap>(tagName: K): HTMLElementTagNameMap[K];
    }
    interface Document extends IHtmlEventListener {
        /**
         * Finds nested elements based on a selector.
         * @param selector The selector for nested elements.
         */
        Find(selector: string): HTMLElement[];
        /**
         * Create an HTML element.
         * @param tagName The tag type.
         */
        Create<K extends keyof HTMLElementTagNameMap>(tagName: K): HTMLElementTagNameMap[K];
    }
    interface HTMLDocumentConstructor extends IHtmlEventListener {
    }
    /** A DOM node that is an HTML element. */
    interface HTMLElement extends IHtmlEventListener {
        /**
         * Finds nested elements based on a selector.
         * @param selector The selector for nested elements.
         */
        Find(selector: string): HTMLElement[];
        /**
         * Gets all text nodes within the current element.
         */
        TextNodes(): Node[];
        /**
        /**
         * Wraps all text nodes in a given tag.
         * @param tag The tag to wrap the text with.
         */
        WrapText<K extends keyof HTMLElementTagNameMap>(tag: K): HTMLElementTagNameMap[K];
        /**
         * The closest parent element based on the selector.
         * The selector for the parents.
         */
        Closest(selector: string): HTMLElement;
        /**
         * The parents.
         */
        Parents(): HTMLElement[];
        /**
         * Adds a class to an element.
         * @param className The CSS class to add.
         */
        AddClass(className: string): HTMLElement;
        /**
         * Removes a class from an element.
         * @param className The CSS class to remove.
         */
        RemoveClass(className: string): HTMLElement;
        /**
         * If the element has a given CSS class.
         * @param className The CSS class to inspect.
         */
        HasClass(className: string): boolean;
        /**
         * Sets an attribute on the element.
         * @param name The name of the attribute.
         * @param value The new value of the attribute. Setting it to 'null' will remove it.
         */
        Attr(name: string, value: string): HTMLElement;
        /** Sets a CSS attribute name and value. */
        Css(key: string, value: string): HTMLElement;
        /**
         * Removes an attribute on the element.
         * @param name The name of the attribute.
         */
        RemoveAttr(name: string): HTMLElement;
        /**
         * Append a child element.
         * @param childElement The element to append.
         */
        Append(childElement: HTMLElement): HTMLElement;
        /**
         * Appends to a parent.
         * @param parentElement The element to append to.
         */
        AppendTo(parentElement: HTMLElement): HTMLElement;
        /**
         * Prepends a child element.
         * @param childElement The element to preppend.
         */
        Prepend(childElement: HTMLElement): HTMLElement;
        /**
         * Prepend to a parent.
         * @param parentElement The element to prepend to.
         */
        PrependTo(parentElement: HTMLElement): HTMLElement;
        /**
         * Inserts an element right before a given element.
         * @param siblingElement The sibling element that will succeed the current element.
         */
        InsertBefore(siblingElement: HTMLElement): HTMLElement;
        /**
         * Inserts an element right after a given element.
         * @param siblingElement The sibling element that will preceed the current element.
         */
        InsertAfter(siblingElement: HTMLElement): HTMLElement;
        /**
         * Replaces one element by another.
         * @param replacement The element to replace with.
         */
        ReplaceWith(replacement: HTMLElement | string): HTMLElement;
        /**
         * Gets or sets the text.
         * @param newText The text to set.
         * @return Returns the text inside the element.
         */
        Text(newText?: string): HTMLElement;
        /**
         * Gets or sets the Html.
         * @param newText The Html to set.
         * @return Returns the Html inside the element.
         */
        Html(newHtml?: string): HTMLElement;
        /** Removes all contents. */
        Empty(): HTMLElement;
        /**Gets attribute names of an element */
        GetAttributeNames(): Array<string>;
        /**
         *  Gets the outer width, including for SVGs.
         * @param includeMargin If the margin is to be included.
         */
        OuterWidth(includeMargin?: boolean): number;
        /** The offset of an element in regards to the window (different from .Position()). */
        Offset(): {
            Top: number;
            Left: number;
        };
        /**  Returns the position of an element relative to its closest positioned (not static) ancestor (different from .Offset()). */
        Position(): {
            Top: number;
            Left: number;
        };
        /**
         *  Gets the outer height, including for SVGs.
         * @param includeMargin If the margin is to be included.
         */
        OuterHeight(includeMargin?: boolean): number;
        /** Fires an event. */
        TriggerEvent<K extends keyof HTMLElementEventMap>(event: K | string, eventData?: object, bubbles?: boolean): Event;
    }
    interface Window extends IHtmlEventListener {
    }
    /** A generic HTML node. */
    interface Node {
        /**
         * Gets the parent element of a Node.
         * @returns Returns the parent element of a Node.
         */
        ParentElement: () => HTMLElement;
    }
/** Accelatrix namespace. */
declare namespace Accelatrix {
}

interface Uint8Array {
    /** Compresses a step of bytes using gzip. */
    Compress: () => Uint8Array;
    /** Decompresses a step of bytes using gzip. */
    Decompress: () => Uint8Array;
}
interface Uint8ArrayConstructor extends Uint8Array {
    /** Compresses a step of bytes using gzip. */
    Compress: () => Uint8Array;
    /** Decompresses a step of bytes using gzip. */
    Decompress: () => Uint8Array;
}

declare namespace Accelatrix {
    /** Deals with backend server interactions. */
    namespace Backend {
        /** Describes a server exception or unmanaged transport-level HTTP exception. */
        interface IServerException extends Error {
            /** The top-level user-friendly message. */
            Message: string;
            /** The HTTP status code. */
            StatusCode: number;
            /** The business exception, if any. */
            InnerException: any;
            /** If the exception is caused by a client-side cancellation of an ongoing request.  */
            IsAbort: boolean;
            /** If the exception is caused by network-related issues. */
            IsNetwork: boolean;
            /** If the exception was the result of a client-side timeout. */
            IsTimeout: boolean;
            /** If the exception is related to an authentication problem.  */
            IsAuthentication: boolean;
            /** If the exception was due to bad formatting of the response.  */
            IsBadFormat: boolean;
            /** If the exception took place in a background call. */
            IsBackground: boolean;
        }
        /** An ongoing server request that can be cancelled. */
        interface IServerRequestHandler {
            /** Immediatelly cancels the request from the client's side. The server may continue processing on its end. */
            Cancel(): void;
            /** An optional callback to invoke once the request is complete. */
            Finally(callback: () => void): IServerRequestHandler;
        }
        /**
         * Wraps client-to-server calls.
         * Can be called within a Web Worker.
         */
        class ServerInvoker {
            /** The name of the cookie (or global variable) to send back as http header as means to prevent cross-site attacks. */
            static readonly GlobalVarOrCookieToHeader = "CSRF";
            /** Switch to GZip compression while uploading data if greater than X number of characters. */
            private static readonly compressPayloadThreshold;
            /** Treat dates as moments in time, or quaitative dates. */
            private static readonly IgnoreTimezone;
            /** A static identifier to include in the URL of all outgoing invocations. */
            private static clientInstance;
            private timeout;
            private injectTypes;
            private compressPayload;
            /** Creates a new ServerInvoker instance. */
            constructor();
            /**
             * Creates a new ServerInvoker instance.
             * @param timeout The timeout in milliseconds. The default is 59'000.
             */
            constructor(timeout: number);
            /**
             * Creates a new ServerInvoker instance.
             * @param timeout The timeout in milliseconds. The default is 59'000.
             * @param injectTypes If upon posting, classes are to have a $type property injected onto them. The default is true.
             */
            constructor(timeout: number, injectTypes: boolean);
            /**
             * Creates a new ServerInvoker instance.
             * @param timeout The timeout in milliseconds. The default is 59'000.
             * @param injectTypes If upon posting, classes are to have a $type property injected onto them. The default is true.
             */
            constructor(timeout: number, injectTypes: boolean, compressPayload: boolean);
            /**
             * Gets the HTTP headers to be sent with each call.
             * @param url The url being invoked.
             */
            protected getHeaders(url: string, compressedUpload?: boolean): {
                [key: string]: string;
            };
            /**
             * Performs a server GET operation.
             * @param url The absolute or relative URL to invoke.
             * @param callback The function to invoke once a result has been produced, or an exception received.
             * @param cache If the GET operation can be cached by the browser. The default setting is FALSE.
             */
            Get<T>(url: string, callback: (result: T, exception: IServerException) => void, cache?: boolean): IServerRequestHandler;
            /**
             * Performs a server GET operation.
             * @param url The absolute or relative URL to invoke.
             * @param callback The function to invoke once a result has been produced, or an exception received.
             * @param cache If the GET operation can be cached by the browser. The default setting is FALSE.
             */
            GetString(url: string, callback: (result: string, exception: IServerException) => void, cache?: boolean): IServerRequestHandler;
            /**
                * Performs a server POST operation.
                * @param url The relative or absolute URL to invoke.
                * @param data The object to post.
                * @param callback The result of the server, which is a typed result or an exception.
                */
            Post<T>(url: string, data: any, callback: (result: T, exception: IServerException) => void): IServerRequestHandler;
            /**
                * Posts any content onto the server, but expects a JSON response.
                * @param url The relative or absolute URL to post to.
                * @param data The data to post.
                * @param contentType The type of content, e.g. application/x-www-form-urlencoded for FORMs, application/fido+uaf for NEVIS FIDO, etc.
                * @param callback The result of the server, which may be a typed result, plain text/html or an exception.
                * @returns Returns a request handler.
                */
            PostContent<T>(url: string, data: {
                [key: string]: any;
            } | any, contentType: string, callback: (result: T, exception: IServerException) => void): IServerRequestHandler;
            private InjectType;
            private GetBaseUrl;
            /**
                * Appends a set of unique identifiers onto the URL.
                * @param url The source url.
                * @param cacheable If the server response is to be cached by the browser.
                */
            private TagUrl;
            /**
                * Performs a server GET operation.
                * @param url The relative or absolute URL to invoke.
                * @param cache If the response can be cached by the browse.
                * @param headers A collection of headers to send.
                * @param timeout The timeout in milliseconds.
                * @param callback The function to invoke once the request is complete.
                */
            protected GetData(url: string, cache: boolean, headers: {
                [key: string]: string;
            }, timeout: number, callback: (responseText: string, statusCode: number, statusText: string, getHeader: (headerName: string) => string, isError: boolean) => void): () => void;
            /**
                * Performs a server POST operation.
                * @param url The relative or absolute URL to invoke.
                * @param data The object to POST to the server.
                * @param headers A collection of headers to send.
                * @param timeout The timeout in milliseconds.
                * @param callback The function to invoke once the request is complete.
                */
            protected PostData(url: string, data: any, headers: {
                [key: string]: string;
            }, timeout: number, callback: (responseText: string, statusCode: number, statusText: string, getHeader: (headerName: string) => string, isError: boolean) => void): () => void;
            private static ServerException;
        }
    }
}



declare namespace Accelatrix {
    /** Deals with backend server interactions. */
    namespace Backend {
        /** An ongoing promise-like server request that can be cancelled, along with the error and result callback. */
        interface IServerPromise<T> extends Accelatrix.Async.IChainablePromise<T> {
            /** Attaches a callback to the rejection of the promise. */
            Catch(onrejected: (exception: Accelatrix.Backend.IServerException) => void): IServerPromise<T>;
            /** Attaches a callback to the rejection of the promise. */
            catch(onrejected: (exception: Accelatrix.Backend.IServerException) => void): IServerPromise<T>;
            /** Attaches callbacks for the resolution and/or rejection of the Promise. */
            Then(onfulfilled: (value: T) => void): IServerPromise<T>;
            /** An optional callback to invoke once the request is complete. */
            Finally(callback: () => void): IServerPromise<T>;
        }
        interface IWebApiBase {
            /** Gets or sets the base url. */
            /** Gets or sets the base url. */
            BaseUrl: string;
            /**
             * Performs a GET operation from the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param cache If requests can be cached. The default setting is false.
             * @returns Returns a cancellable promise.
             */
            Get<T>(controller: string, action: string, cache?: boolean): IServerPromise<T>;
            /**
             * Performs a GET operation from the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param arg0 An optional argument to pass onto the action.
             * @param cache If requests can be cached. The default setting is false.
             * @returns Returns a cancellable promise.
             */
            Get<T>(controller: string, action: string, arg0: any, cache?: boolean): IServerPromise<T>;
            /**
             * Performs a GET operation from the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param arg0 An optional argument to pass onto the action.
             * @param arg1 An optional second argument to pass onto the action.
             * @returns Returns a cancellable promise.
             */
            Get<T>(controller: string, action: string, arg0: any, arg1: any): IServerPromise<T>;
            /**
             * Performs a GET operation from the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param arg0 An optional argument to pass onto the action.
             * @param arg1 An optional second argument to pass onto the action.
             * @param arg2 An optional third argument to pass onto the action.
             * @returns Returns a cancellable promise.
             */
            Get<T>(controller: string, action: string, arg0: any, arg1: any, arg2: any): IServerPromise<T>;
            /**
                * Posts an object to the server.
                * @param controller The server controller to invoke.
                * @param action The server action to invoke.
                * @param obj The object to post.
                * @param priority A relative priority for the request.
                * @returns Returns a cancellable promise.
                */
            Post<T>(controller: string, action: string, obj: any, priority?: number): IServerPromise<T>;
            /**
             * Posts an object to the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param obj The object to post.
             * @param arg0 An optional argument to pass onto the action.
             * @returns Returns a cancellable promise.
             */
            Post<T>(controller: string, action: string, obj: any, arg0?: any): IServerPromise<T>;
            /**
             * Posts an object to the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param obj The object to post.
             * @param arg0 An optional argument to pass onto the action.
             * @param arg1 A second optional argument to pass onto the action.
             * @returns Returns a cancellable promise.
             */
            Post<T>(controller: string, action: string, obj: any, arg0?: any, arg1?: any): IServerPromise<T>;
            /**
             * Posts an object to the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param obj The object to post.
             * @param arg0 An optional argument to pass onto the action.
             * @param arg1 A second optional argument to pass onto the action.
             * @param arg2 A third optional argument to pass onto the action.
             * @returns Returns a cancellable promise.
             */
            Post<T>(controller: string, action: string, obj: any, arg0?: any, arg1?: any, arg2?: any): IServerPromise<T>;
            /**
             * Uploads files to the server.
             * @param controller The controller.
             * @param action The action in the controller.
             * @param files The files to upload.
             * @returns Returns the promise.
             */
            UploadFiles<T>(controller: string, action: string, files: FileList): IServerPromise<T>;
        }
        /** A generic implementation of a WebApi client. */
        class WebApiBase implements IWebApiBase {
            private _baseUrl;
            private serverInvoker;
            /** Gets or sets the base url. */
            get BaseUrl(): string;
            set BaseUrl(value: string);
            /**
             * Creates a new WebApiBase instance.
             */
            constructor();
            /**
             * Creates a new WebApiBase instance.
             * @param serverInvoker The underlying ServerInvoker, otherwise the base ServerInvoker is used.
             */
            constructor(serverInvoker: Accelatrix.Backend.ServerInvoker);
            /**
             * Creates a new WebApiBase instance.
             * @param serverInvoker The underlying ServerInvoker, otherwise the base ServerInvoker is used.
             * @param baseUrl The absolute or relative base URL where services are hosted.
             */
            constructor(serverInvoker: Accelatrix.Backend.ServerInvoker, baseUrl: string);
            /**
             * Performs a GET operation from the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param cache If requests can be cached. The default setting is false.
             * @returns Returns a cancellable promise.
             */
            Get<T>(controller: string, action: string, cache?: boolean): IServerPromise<T>;
            /**
             * Performs a GET operation from the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param arg0 An optional argument to pass onto the action.
             * @param cache If requests can be cached. The default setting is false.
             * @returns Returns a cancellable promise.
             */
            Get<T>(controller: string, action: string, arg0: any, cache?: boolean): IServerPromise<T>;
            /**
             * Performs a GET operation from the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param arg0 An optional argument to pass onto the action.
             * @param arg1 An optional second argument to pass onto the action.
             * @returns Returns a cancellable promise.
             */
            Get<T>(controller: string, action: string, arg0: any, arg1: any): IServerPromise<T>;
            /**
             * Performs a GET operation from the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param arg0 An optional argument to pass onto the action.
             * @param arg1 An optional second argument to pass onto the action.
             * @param arg2 An optional third argument to pass onto the action.
             * @returns Returns a cancellable promise.
             */
            Get<T>(controller: string, action: string, arg0: any, arg1: any, arg2: any): IServerPromise<T>;
            /**
            * Posts an object to the server.
            * @param controller The server controller to invoke.
            * @param action The server action to invoke.
            * @param obj The object to post.
            * @param priority A relative priority for the request.
            * @returns Returns a cancellable promise.
            */
            Post<T>(controller: string, action: string, obj: any, priority?: number): IServerPromise<T>;
            /**
            * Posts an object to the server.
            * @param controller The server controller to invoke.
            * @param action The server action to invoke.
            * @param obj The object to post.
            * @param arg0 An optional argument to pass onto the action.
            * @returns Returns a cancellable promise.
            */
            Post<T>(controller: string, action: string, obj: any, arg0?: any): IServerPromise<T>;
            /**
            * Posts an object to the server.
            * @param controller The server controller to invoke.
            * @param action The server action to invoke.
            * @param obj The object to post.
            * @param arg0 An optional argument to pass onto the action.
            * @param arg1 A second optional argument to pass onto the action.
            * @returns Returns a cancellable promise.
            */
            Post<T>(controller: string, action: string, obj: any, arg0?: any, arg1?: any): IServerPromise<T>;
            /**
            * Posts an object to the server.
            * @param controller The server controller to invoke.
            * @param action The server action to invoke.
            * @param obj The object to post.
            * @param arg0 An optional argument to pass onto the action.
            * @param arg1 A second optional argument to pass onto the action.
            * @param arg2 A third optional argument to pass onto the action.
            * @returns Returns a cancellable promise.
            */
            Post<T>(controller: string, action: string, obj: any, arg0?: any, arg1?: any, arg2?: any): IServerPromise<T>;
            /**
             * Uploads files to the server.
             * @param controller The controller.
             * @param action The action in the controller.
             * @param files The files to upload.
             * @returns Returns the promise.
             */
            UploadFiles<T>(controller: string, action: string, files: FileList | Array<File>): IServerPromise<T>;
            private static UrlEncodeArgument;
        }
    }
}



declare namespace Accelatrix {
    /** Deals with backend server interactions. */
    namespace Backend {
        interface IWebApi extends Accelatrix.Backend.IWebApiBase {
            /**
             * Performs a GET operation from the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param cache If requests can be cached. The default setting is false.
             * @returns Returns a cancellable promise.
             */
            Get<T>(controller: string, action: string, cache?: boolean): Accelatrix.Backend.IServerPromise<T>;
            /**
             * Performs a GET operation from the server.
             * @param controller The server controller to invoke.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param arg0 An optional argument to pass onto the action.
             * @param cache If requests can be cached. The default setting is false.
             * @returns Returns a cancellable promise.
             */
            Get<T>(controller: string, action: string, arg0: any, cache?: boolean): Accelatrix.Backend.IServerPromise<T>;
            /**
             * Performs a GET operation from the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param arg0 An optional argument to pass onto the action.
             * @param arg1 An optional second argument to pass onto the action.
             * @returns Returns a cancellable promise.
             */
            Get<T>(controller: string, action: string, arg0: any, arg1: any): Accelatrix.Backend.IServerPromise<T>;
            /**
             * Performs a GET operation from the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param arg0 An optional argument to pass onto the action.
             * @param arg1 An optional second argument to pass onto the action.
             * @param arg2 An optional third argument to pass onto the action.
             * @returns Returns a cancellable promise.
             */
            Get<T>(controller: string, action: string, arg0: any, arg1: any, arg2: any): Accelatrix.Backend.IServerPromise<T>;
            /**
             * Posts an object to the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param obj The object to post.
             * @param priority A relative priority for the request.
             * @returns Returns a cancellable promise.
             */
            Post<T>(controller: string, action: string, obj: any, priority?: number): Accelatrix.Backend.IServerPromise<T>;
            /**
             * Posts an object to the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param obj The object to post.
             * @param arg0 An optional argument to pass onto the action.
             * @returns Returns a cancellable promise.
             */
            Post<T>(controller: string, action: string, obj: any, arg0?: any): Accelatrix.Backend.IServerPromise<T>;
            /**
             * Posts an object to the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param obj The object to post.
             * @param arg0 An optional argument to pass onto the action.
             * @param arg1 A second optional argument to pass onto the action.
             * @returns Returns a cancellable promise.
             */
            Post<T>(controller: string, action: string, obj: any, arg0?: any, arg1?: any): Accelatrix.Backend.IServerPromise<T>;
            /**
             * Posts an object to the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param obj The object to post.
             * @param arg0 An optional argument to pass onto the action.
             * @param arg1 A second optional argument to pass onto the action.
             * @param arg2 A third optional argument to pass onto the action.
             * @returns Returns a cancellable promise.
             */
            Post<T>(controller: string, action: string, obj: any, arg0?: any, arg1?: any, arg2?: any): Accelatrix.Backend.IServerPromise<T>;
            /**
             * Uploads files to the server.
             * @param controller The controller.
             * @param action The action in the controller.
             * @param files The files to upload.
             * @returns Returns the promise.
             */
            UploadFiles<T>(controller: string, action: string, files: FileList): Accelatrix.Backend.IServerPromise<T>;
        }
        /** WebApi RESTful invoker with an embedded queueing engine. */
        class WebApi {
            private static WebApiMaxParallelism;
            private static relyOnParent;
            private static myWebApi;
            /** Event handler triggered when receiving. */
            private static onReceive;
            /** Gets or sets the base url. */
            static get BaseUrl(): string;
            static set BaseUrl(value: string);
            /** Gets or sets a global event handler when receiving responses. A good hook for analytics or redirects to login pages. If the request has been diverted and should not continue, return true. */
            static get OnReceive(): (result?: any, exception?: Accelatrix.Backend.IServerException, elapsed?: number, isBackground?: boolean) => boolean;
            static set OnReceive(value: (result?: any, exception?: Accelatrix.Backend.IServerException, elapsed?: number, isBackground?: boolean) => boolean);
            /**
             * Performs a GET operation from the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param cache If requests can be cached. The default setting is false.
             * @returns Returns a cancellable promise.
             */
            static Get<T>(controller: string, action: string, cache?: boolean): Accelatrix.Backend.IServerPromise<T>;
            /**
             * Performs a GET operation from the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param arg0 An optional argument to pass onto the action.
             * @param cache If requests can be cached. The default setting is false.
             * @returns Returns a cancellable promise.
             */
            static Get<T>(controller: string, action: string, arg0: any, cache?: boolean): Accelatrix.Backend.IServerPromise<T>;
            /**
             * Performs a GET operation from the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param arg0 An optional argument to pass onto the action.
             * @param arg1 An optional second argument to pass onto the action.
             * @returns Returns a cancellable promise.
             */
            static Get<T>(controller: string, action: string, arg0: any, arg1: any): Accelatrix.Backend.IServerPromise<T>;
            /**
             * Performs a GET operation from the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param arg0 An optional argument to pass onto the action.
             * @param arg1 An optional second argument to pass onto the action.
             * @param arg2 An optional third argument to pass onto the action.
             * @returns Returns a cancellable promise.
             */
            static Get<T>(controller: string, action: string, arg0: any, arg1: any, arg2: any): Accelatrix.Backend.IServerPromise<T>;
            /**
             * Posts an object to the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param obj The object to post.
             * @param priority A relative priority for the request.
             * @returns Returns a cancellable promise.
             */
            static Post<T>(controller: string, action: string, obj: any, priority?: number): Accelatrix.Backend.IServerPromise<T>;
            /**
             * Posts an object to the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param obj The object to post.
             * @param arg0 An optional argument to pass onto the action.
             * @returns Returns a cancellable promise.
             */
            static Post<T>(controller: string, action: string, obj: any, arg0?: any): Accelatrix.Backend.IServerPromise<T>;
            /**
             * Posts an object to the server.
             * @param controller The server controller to invoke.
             * @param action The server action to invoke.
             * @param obj The object to post.
             * @param arg0 An optional argument to pass onto the action.
             * @param arg1 A second optional argument to pass onto the action.
             * @returns Returns a cancellable promise.
             */
            static Post<T>(controller: string, action: string, obj: any, arg0?: any, arg1?: any): Accelatrix.Backend.IServerPromise<T>;
            /**
             * Uploads files to the server.
             * @param controller The controller.
             * @param action The action in the controller.
             * @param files The files to upload.
             * @returns Returns the promise.
             */
            static UploadFiles<T>(controller: string, action: string, files: FileList | Array<File>): Accelatrix.Backend.IServerPromise<T>;
            /**
             * Logs an object, typically an unmanaged exception, back to the server in the background.
             * @param controller The controller to target the post.
             * @param action The action to post to.
             * @param obj The object to post.
             */
            static Log(controller: string, action: string, obj: any): any;
            /**
            * Flushes the queue of all pending or ongoing requests.
            * @param whichPriorities Zero or negative indicates background activities.
            */
            static Flush(whichPriorities?: (priority: number) => boolean): void;
            private static Enqueue;
            private static RequestQueueEntry;
            private static RequestQueue;
        }
    }
}

    interface HTMLInputElement {
        /**
         * Restricts a field to only accept numbers and formats the display according to Accelatrix.Globalization.DefaultFormatting.
         * @param precision The precison of the decimals as powers of 10, e.g. 0, 10, 100.
         * @param allowNegative If the number can be negative.
         * @returns Returns the input element.
         */
        RestrictToNumber: (precision?: number, allowNegative?: boolean) => HTMLInputElement;
        /**
         * Restricts a field to only accept integers and formats the display according to Accelatrix.Globalization.DefaultFormatting.
         * @param allowNegative If the number can be negative.
         * @param allowZero If zero is to be explicitly displayed.
         * @returns Returns the input element.
         */
        RestrictToInteger: (allowNegative?: boolean, allowZero?: boolean) => HTMLInputElement;
        /** Extracts the number as a number from a field where .RestrictToNumber() or .RestrictToInteger() has been applied. */
        Number: () => number;
        /**
         * Restricts a field to only accept dates and formats the display according to Accelatrix.Globalization.DefaultFormatting.
         * @param minDate An optional minimum date.
         * @param maxDate An optimal maximum date.
         * @param maskedInput Asn optional masked input to use when the field is anonymyzed.
         * @returns Returns the input element.
         */
        RestrictToDate: (minDate?: Date, maxDate?: Date, maskedInput?: boolean) => HTMLInputElement;
        /** Extracts the Date as a Dates from a field where .RestrictToDate() has been applied. */
        Date: () => Date;
        /** Prevents a field from receiving copied information and does not allow copying from it. */
        RestrictCopyPaste: () => HTMLInputElement;
        /** Can only accept a well-formed email. */
        RestrictToEmail: () => HTMLInputElement;
        /** If the field contains a well-formed email. */
        IsValidEmail: () => boolean;
        /**
         * Autosizes a field to the size of the text therein.
         * @param element The field element.
         * @param isActive If the element is active and therefore some extra room for the user input should be added.
         */
        AutoSize: (isActive?: boolean) => HTMLInputElement;
        /**
         * Lazy reacts to user actions.
         * @param callback The callback to invoke.
         * @param minChars The min characters for it to engage.
         * @returns Returns the element.
         */
        LazyReact: (callback: (value: string) => void, minChars?: number) => HTMLInputElement;
    }
    interface HTMLSelectElement {
        /**
         * Autosizes a field to the size of the text therein.
         * @param element The field element.
         * @param isActive If the element is active and therefore some extra room for the user input should be added.
         */
        AutoSize: (isActive?: boolean) => HTMLSelectElement;
    }
    interface HTMLTextAreaElement {
        /**
         * Autosizes a field to the size of the text therein.
         * @param element The field element.
         * @param isActive If the element is active and therefore some extra room for the user input should be added.
         */
        AutoSize: (isActive?: boolean) => HTMLTextAreaElement;
        /**
         * Lazy reacts to user actions.
         * @param callback The callback to invoke.
         * @param minChars The min characters for it to engage.
         * @returns Returns the element.
         */
        LazyReact: (callback: (value: string) => void, minChars?: number) => HTMLInputElement;
    }
declare namespace Accelatrix {
    /** Deals with user experience. */
    namespace Ux {
        /** The version of Accelatrix UX */
        const Version = "1.0.0";
    }
}

    interface HTMLSelectElement {
        /**
        * Makes a select box searchable.
        */
        MakeSmart(): HTMLSelectElement;
        /**
        * Makes a select box searchable.
        * @param elementRenderer A function used to render elements in the dropdown.
        */
        MakeSmart(elementRenderer: (member: {
            Value: string;
            Text: string;
            Selected: boolean;
        }, searchTerm?: string) => HTMLElement): HTMLSelectElement;
    }
declare namespace Accelatrix {
    /** Deals with user experience. */
    namespace Ux {
    }
}

    interface Error {
        /**
         * Displays an error next to an element in a balloon.
         * @param target The target element.
         */
        Show(target: HTMLElement | MouseEvent): HTMLElement;
        /**
         * Displays an error next to an element in a balloon.
         * @param target The target element.
         * @param position A single or a set of tentative positions where to place the balloon in relation to its taget.
         */
        Show(target: HTMLElement | MouseEvent, position: Accelatrix.Ux.SmartBalloon.Position | Accelatrix.Ux.SmartBalloon.Position[]): HTMLElement;
    }
declare namespace Accelatrix {
    namespace Ux {
        /** A flexible floating balloon. */
        namespace SmartBalloon {
            /** The position of the SmartBalloon in relation to its target. */
            enum Position {
                Left = 0,
                Bottom = 1,
                Right = 2,
                Top = 3,
                CenterLeft = 4,
                CenterBottom = 5,
                CenterRight = 6,
                CenterTop = 7
            }
            /** The interactive behavior of the SmartBalloon. */
            enum Behavior {
                Normal = 0,
                Sticky = 1,
                Picky = 2
            }
            /** The target of SmartBalloon. */
            enum TargetMode {
                Element = 0,
                Before = 1,
                After = 2
            }
            /**
             * Shows the SmartBalloon attached to an element.
             * @param target The target element.
             * @param contents The contents of the balloon.
             */
            function Show(target: HTMLElement, contents: string | HTMLElement): HTMLElement;
            /**
             * Shows the SmartBalloon attached to an element.
             * @param target The target element.
             * @param contents The contents of the balloon.
             * @param position The position in regards to the target or a list of desired positions to revolve based on the available spacing.
             */
            function Show(target: HTMLElement, contents: string | HTMLElement, position: Position | Position[]): HTMLElement;
            /**
             * Shows the SmartBalloon attached to an element.
             * @param target The target element.
             * @param contents The contents of the balloon.
             * @param position The position in regards to the target or a list of desired positions to revolve based on the available spacing.
             * @param behavior How the balloon should behave.
             */
            function Show(target: HTMLElement, contents: string | HTMLElement, position: Position | Position[], behavior: Behavior): HTMLElement;
            /**
             * Shows the SmartBalloon attached to an element.
             * @param target The target element.
             * @param contents The contents of the balloon.
             * @param position The position in regards to the target or a list of desired positions to revolve based on the available spacing.
             * @param behavior How the balloon should behave.
             * @param targetMode How the balloon should target the target element.
             */
            function Show(target: HTMLElement, contents: string | HTMLElement, position: Position | Position[], behavior: Behavior, targetMode: TargetMode): HTMLElement;
            /**
             * Shows the SmartBalloon attached to an element.
             * @param target The target element.
             * @param contents The contents of the balloon.
             * @param position The position in regards to the target or a list of desired positions to revolve based on the available spacing.
             * @param behavior How the balloon should behave.
             * @param targetMode How the balloon should target the target element.
             * @param event Targets an event instead.
             */
            function Show(target: HTMLElement, contents: string | HTMLElement, position: Position | Position[], behavior: Behavior, targetMode: TargetMode, event: MouseEvent): HTMLElement;
            /**
             * Hides an active baloon associated with the element.
             * @param target The target element.
             */
            function Hide(target: HTMLElement): void;
            /** Hides all SmartBalloon currently active. */
            function HideAll(): void;
            /** Removes all SmartBalloons currently active. */
            function RemoveAll(): void;
        }
    }
}

declare namespace Accelatrix {
    /** Deals with maintaining state in the frontend. */
    namespace StateManagement {
        /** A node in a notificiation tree. */
        interface INotificationTreeNode {
            /**
             * Who is observing this node.
             */
            Observers: INotificationTreeNode[];
            /**
             * The nodes this node is observing.
             */
            Observees: INotificationTreeNode[];
            /**
             * Subscribes to notifications issued by a given node.
             * @param node The node to be subscribed.
             */
            Subscribe(node: INotificationTreeNode): void;
            /**
             * Receives a notification from a node.
             * @param notification The notification that is being passed along.
             */
            Receive(notification: ITreeNotification): void;
        }
        /**
         * The directions of a notification propagating across a notification tree.
         */
        export enum TreeNotificationDirection {
            /**
             * The notification is propagating upwards throughout the notification tree in direction of the root node.
             */
            Bubble = "Bubble",
            /**
             * The notification is propagating downwards throughout the notification tree in direction of the leaf nodes.
             */
            Sink = "Sink"
        }
        /**
         * A generic notification bubbling or sinking through a notification tree.
         */
        interface ITreeNotification {
            /**
             * The node where the notification originated from.
             */
            SourceNode: any;
            /**
             * The direction the notification is propagating throughout the notification tree.
             */
            PropagationDirection: TreeNotificationDirection;
            /**
             * The initial propagation direction when the notification was issued.
             */
            InitialDirection: TreeNotificationDirection;
            /**
             * The nodes already visited by the notification.
             */
            Stack: any[];
            /**
             * A method to revert the propagation direction.
             */
            BounceDirection: () => void;
        }
        /**
         * A notification that advertises a property that changed.
         */
        interface IPropertyChangedNotification extends ITreeNotification {
            /**
             * The name of the property that has changed.
             */
            PropertyName: string;
            /**
             * The new value of the property.
             */
            NewValue: any;
            /**
             * The old value of the property.
             */
            OldValue: any;
        }
        /**
         * The states of a managed property.
         */
        enum PropertyState {
            /** The property is up-to-date. */
            UpToDate = 0,
            /** The property is dirty, which means, an update is pending. */
            Dirty = 1
        }
        /** The base node of a notification tree */
        abstract class NotificationTreeNodeBase implements INotificationTreeNode {
            private static RECEIVED;
            private static SENT;
            private static SENDING;
            private observers;
            private observees;
            private PropertyBag;
            private EventListeners;
            constructor();
            get Observers(): INotificationTreeNode[];
            get Observees(): INotificationTreeNode[];
            /**
             * Gets the state of the node in terms of properties.
             */
            get State(): PropertyState;
            private get IsRoot();
            private get HasChildren();
            /**
             * Adds an event listener to when a notification is received.
             * @param handler The event handler.
             * @param remove If the listener is to be removed.
             */
            protected OnNotificationReceived(handler: (notification: ITreeNotification) => void, remove?: boolean): void;
            static PropertyChangedHandler(propertyName: string | Array<string>, notification: ITreeNotification, handler: (notification: IPropertyChangedNotification) => void): void;
            /**
             * Traps property changed notifications.
             * @param The name or names of the properties that is to be trapped once changed.
             * @param handler The function that will be invoked when the property has been changed.
             */
            protected OnPropertyChangedReceived(propertyName: string | Array<string>, handler: (notification: IPropertyChangedNotification) => void, remove?: boolean): void;
            /**
             * Traps property changed notifications before being sent.
             * @param The name or names of the properties that is to be trapped once changed.
             * @param handler The function that will be invoked when the property has been changed.
             */
            protected OnSendingPropertyChanged(propertyName: string | Array<string>, handler: (notification: IPropertyChangedNotification) => void, remove?: boolean): void;
            /**
             * Adds an event listener to when a notification is sent/relayed.
             * @param handler The event handler.
             * @param remove If the listener is to be removed.
             */
            protected OnNotificationSent(handler: (notification: ITreeNotification) => void, remove?: boolean): void;
            /**
             * Adds an event listener to when a notification that is about to be sent/relayed.
             * @param handler The event handler.
             * @param remove If the listener is to be removed.
             */
            protected OnSendingNotification(handler: (notification: ITreeNotification) => void, remove?: boolean): void;
            private AddEventListener;
            private RemoveEventListener;
            private FireEvent;
            Subscribe(node: INotificationTreeNode): void;
            /**
             * When overriden, allows descendants to validate if a given node is elegible to subscribe to notification of this node.
             * This is useful to defend against trees that would otherwise result in circular messages.
             * @param nodeThatWantsToObserveMe The node that wants to observe this node.
             */
            protected ValidateSubscription(nodeThatWantsToObserveMe: INotificationTreeNode): boolean;
            Receive(notification: ITreeNotification): void;
            private RelayNotification;
            private RelayUpwards;
            private RelayDownwards;
            /**
             * Gets the initial propagation direction when a notification is issued.
             * This can be overriden by descendants.
             */
            protected InitialNotificationDirection(): TreeNotificationDirection;
            /**
             * Allows descendants to specify how asynchronous calls are executed.
             * @param The action to be executed async.
             */
            protected ExecuteAsync(action: () => void): void;
            /**
             * Issues a notification which will propgate throughout the hiearchy.
             * @param notification The notification to issue.
             */
            protected IssueNotification(notification: ITreeNotification): void;
            /**
             * Issues a refresh data notification.
             * @param dirtyProperties The properties which are dirty.
             */
            protected IssueRefreshDataNotification(dirtyProperties: {
                [key: string]: any;
            }): void;
            /**
             * Issues a generic notification.
             * @param message The message to pass.
             */
            protected IssueGenericNotification(message: any): void;
            /**
             * Issues a propery changed notification.
             * @param propertyName The name of the property that changed.
             * @param oldValue The initial value.
             * @param newValue The new value.
             */
            protected IssuePropertyChanged(propertyName: string, oldValue: any, newValue: any): void;
            /**
             * Gets the value of a property from the property bag.
             * @param propertyName The name of the property to get.
             */
            protected GetProperty<T>(propertyName: string): T;
            /**
             * Saves a managed property into the property bag and will automatically issue a PropertyChangedNotification if applicable.
             * @param propertyName The name of the property to set.
             * @param value The value to set in the property.
             * @param state The state of the property being set and the default it UpToDate. When a property is marked as dirty, a notification will not be issued automatically.
             */
            protected SetProperty(propertyName: string, value: any, state?: PropertyState): void;
            private DoSetProperty;
            private CheckForNeedToRefresh;
            /**
             * Saves a set of managed properties into the property bag and will automatically issue a PropertyChangedNotification if applicable.
             * This method will only perform a single invokation of RefreshView().
             * @param properties The properties to set.
             * @param state The state of the properties being set and the default it UpToDate. When properties is marked as dirty, a notification will not be issued automatically.
             */
            protected SetProperties(properties: {
                [key: string]: any;
            }, state?: PropertyState): void;
            /**
             * Called when someone is trying to access properties which are dirty and hence, the node's properties required to be refreshed.
             * @param dirtyProperties Key/value pairs of the managed properties that are currently not up-to-date.
             */
            protected abstract RefreshData(dirtyProperties: {
                [key: string]: any;
            }): void;
            /**
             * Alerts the runtime that a view needs to be refreshed.
             * @param properties The name of the properties that have changed.
             */
            protected abstract RefreshView(properties: string[]): void;
        }
        /**
         * A node in a NotificationTreeNode hierarchy.
         * Extends the NotificationTreeNode by enforcing structure, e.g. no circular hierarchies, and provides a factory for adding child nodes.
         */
        export abstract class NotificationTreeNode extends NotificationTreeNodeBase {
            private Children;
            private rootNode;
            constructor();
            /**
             * Gets the root node of the  hierarchy.
             */
            protected get Root(): NotificationTreeNode;
            /**
             * Override of base.ValidateSubscription();
             * @param nodeThatWantsToObserveMe The node that wants to observe this node.
             */
            protected ValidateSubscription(nodeThatWantsToObserveMe: INotificationTreeNode): boolean;
            private IsCircular;
            private ParentsHierarchy;
            /**
             * Instanciates a new node.
             * Allows decendants to replace and inject their own types at runtime.
             */
            private static NodeFactory;
            /**
             * Instanciates a new node.
             * Allows decendants to replace and inject their own types at runtime.
             */
            protected NodeFactory<T extends NotificationTreeNode>(type: {
                new (): T;
            }): T;
            /**
             * Lazy-loads a child node and attaches it to the hierarchy.
             * @param type The type of the new child node.
             */
            protected PrepareAndRetrieveChild<T extends NotificationTreeNode>(type: {
                new (): T;
            }): T;
            /**
             * Called when the node is ready and about to be subscribed to.
             */
            protected Initialize(): void;
            /**
             * Called when a child node is about to be added to this hierarchy of this node.
             * @param node The node that has been added.
             */
            protected OnAddingNode(node: NotificationTreeNode): void;
            /**
             * Called when a child node is added to this hierarchy of this node.
             * @param node The node that has been added.
             */
            protected OnAddedNode(node: NotificationTreeNode): void;
            private AscensionPath;
            /**
             * Inspects if a notification has passed by a given node while ascending.
             * @param notification The notification.
             * @param The node node.
             */
            protected HasPassedByNode(notification: ITreeNotification, node: NotificationTreeNode): boolean;
        }
        
    }
}
