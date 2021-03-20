import { GetServerSideProps } from 'next';
import { Page, PageProps } from '../components/Page';
import { getEntriesByContentType, getPageBySlug } from '../lib/api';
import { ITalkFields } from '../lib/contentful';

export default Page;

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  let slug = context.params?.slug ? `/${(context.params.slug as string[]).join('/')}` : '/';

  if (slug === '/index') {
    slug = '/';
  }

  const page = getPageBySlug(context.preview, slug);

  const talks = getEntriesByContentType<ITalkFields>(context.preview, 'talk');

  return {
    props: {
      slug,
      page: await page,
      talks: (await talks) ?? [],
    },
  };
};
