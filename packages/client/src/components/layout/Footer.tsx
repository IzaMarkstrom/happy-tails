import {
  Box,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Link,
} from "@chakra-ui/react";
import LoginModal from "../LoginModal";

export default function Footer() {
  return (
    <div>
      <Box>
        <Flex
          minWidth="max-content"
          alignItems="center"
          height="30vh"
          justifyContent="center"
          gap="2"
          p="2"
          bgColor="#fff"
          color="white"
        >
          <Box color="black">
            <Breadcrumb separator="-">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Kontakt</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">Följ</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <Link href="/admin">Admin</Link>
              </BreadcrumbItem>

              <LoginModal />
            </Breadcrumb>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
