import { useRecoilValue, useRecoilState } from "recoil";
import {
  jobAtom,
  messagesAtom,
  networkAtom,
  notificationsAtom,
  totalNotificationSelector,
} from "../store/atom";
import { useMemo } from "react";

function Header() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobNotificationCount = useRecoilValue(jobAtom);
  const notificationCount = useRecoilValue(notificationsAtom);
  const [messageNotificationCount, setMessageNotificationCount] = useRecoilState(messagesAtom);


  //UseMemo way
  //  const totalValue = useMemo(() => { 
  //   networkNotificationCount +
  //     jobNotificationCount +
  //     messageNotificationCount +
  //     notificationCount;
  // }, [
  //   networkNotificationCount,
  //   jobNotificationCount,
  //   messageNotificationCount,
  //   notificationCount,
  // ]);

  return (
    <div>
      <hr />
      <h1>1. Fetching data normally using Atom</h1>
      <button>Home</button>
      <button>
        My network |
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount}|
      </button>
      <button>
        Jobs |{jobNotificationCount >= 100 ? "99+" : jobNotificationCount}|
      </button>
      <button>
        Notification |{notificationCount >= 100 ? "99+" : notificationCount}|
      </button>
      <button>
        Messages |
        {messageNotificationCount >= 100 ? "99+" : messageNotificationCount}|
      </button>
      <Me/>
      <button onClick={() => setMessageNotificationCount((c) => c + 1)}>
        Add messages
      </button>
      <hr />
    </div>
  );
}
function Me(){
  const totalNotificationCount=useRecoilValue(totalNotificationSelector)

  return <div>
      <button>Me |{totalNotificationCount }|</button>
  </div>
}

export default Header;
