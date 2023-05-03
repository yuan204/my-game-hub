import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameCardSkeleton = () => {
  return (
    <Card >
      <CardBody>
        <Skeleton height={200} />
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
