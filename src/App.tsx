import { FunctionComponent, useLayoutEffect, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";

import PublicRoutes from "global/global-route";
import { fetchStaticLabels } from "global/global-action";
import { FetchLabelPayload } from "global/global-model";
import { LABEL_PATH, LABEL_TYPE, BASE_URL } from "global/global-constant";
import { fetchStaticLabelSelector } from "global/global_selector";
import AppLoader from "components/common/loader/app-loader";

const App: FunctionComponent = () => {
  const dispatch = useDispatch();
  console.log("baseurl", BASE_URL);
  const { labels } = useSelector(fetchStaticLabelSelector);

  useLayoutEffect(() => {
    const payload: FetchLabelPayload = {
      filePath: LABEL_PATH,
      fileType: LABEL_TYPE,
    };
    dispatch(fetchStaticLabels(payload));
  }, []);

  return labels ? (
    <>
      <Suspense fallback={<AppLoader />}>
        <PublicRoutes />
      </Suspense>
    </>
  ) : (
    <AppLoader />
  );
};

export default App;
