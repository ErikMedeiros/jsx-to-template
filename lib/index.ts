export default function h() {}

declare global {
  module JSX {
    interface IntrinsicElements {
      div: { name?: string };
    }
  }
}
