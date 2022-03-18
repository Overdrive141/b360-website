/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";

import { Text } from "@theme-ui/components";

export default function Logo({ white }) {
  return (
    <Link
      path="/"
      sx={
        {
          // variant: "links.logo", // Add logo here
        }
      }
    >
      <Text as="p">WORKCYCLE</Text>
    </Link>
  );
}
