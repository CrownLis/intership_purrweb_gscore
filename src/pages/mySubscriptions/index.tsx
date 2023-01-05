import { NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { wrapper } from '@/store/store';
import { rootActions } from '@/store/ducks';
import UserSubscriptions from '@/components/UserSubscriptions';
import Container from '@/components/Container';
import Button from '@/UIComponents/Button';

const MySubscriptions: NextPage = () => {
  const router = useRouter();

  return (
    <PageContainer>
      <TitleContainer>
        <StyledTitle>My subscriptions</StyledTitle>
        <Button variant="primary" size="large" onClick={() => router.push('/')}>
          Upgrade
        </Button>
      </TitleContainer>
      <UserSubscriptions />
    </PageContainer>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  try {
    await store.dispatch(rootActions.subscribes.getSubscribes()).unwrap();
    await store.dispatch(rootActions.codes.getCodes()).unwrap();
  } catch (e) {
    console.log((e as Error).message);
  }

  return {
    props: {},
  };
});

export default MySubscriptions;

const PageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 44px;
`;

const StyledTitle = styled.h3`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 64px;
`;
