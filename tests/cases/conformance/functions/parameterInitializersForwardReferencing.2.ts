// @target: es5, es2015, esnext

// https://github.com/microsoft/TypeScript/issues/36295

function a(): any {}

function b({ b = a(), ...x } = a()) {
    var a;
}