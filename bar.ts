import foo from './foo';

foo();

export default (): string | undefined => undefined;

// this is here to indicate that `import/no-mutable-exports` is working
export let mutable = 1;