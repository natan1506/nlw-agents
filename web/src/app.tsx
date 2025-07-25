import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRoom } from "./pages/create-room";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Room } from "./pages/room";
import { RecordRoomAudio } from "./pages/record-room-audio";

const queryClient = new QueryClient();

export function App() {
  return (
    <div className="min-h-screen bg-linear-65 from-purple-500/20 to-pink-500/50">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route index element={<CreateRoom />} />
            <Route path="/room/:roomId" element={<Room />} />
            <Route path="/room/:roomId/audio" element={<RecordRoomAudio />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}
