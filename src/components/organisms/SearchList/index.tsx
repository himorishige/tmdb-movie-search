import { memo } from 'react';
import { Grid } from '@chakra-ui/react';
import { MovieListItem } from 'src/components/molecules';
import { DetailResponse, MovieData } from 'src/types';

export type Props = {
  results?: Array<MovieData | DetailResponse>;
};

const SearchList: React.VFC<Props> = memo(({ results }) => {
  return (
    <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }} gap="1rem">
      {results?.map((data) => (
        <MovieListItem key={data.id} data={data} />
      ))}
    </Grid>
  );
});

export default SearchList;
