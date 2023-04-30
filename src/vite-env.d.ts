/// <reference types="vite/client" />

module "react-test-renderer" {
  export default function renderer(): {
    create: (element: JSX.Element) => {
      toJSON: () => Record<string, unknown>;
    };
  };
}
