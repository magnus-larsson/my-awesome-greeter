import util = require('./util');

export const Greeter = (name: string) => `Hello ${name} from ${util.name()} at ${util.tsUtc()}`;
