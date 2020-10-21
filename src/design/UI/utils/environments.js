const NODE_ENV = process.env.NODE_ENV;
if (!NODE_ENV) {
  console.error("NODE_ENV not set");
  process.exit(1);
}

export const __DEV__ = NODE_ENV === "development";