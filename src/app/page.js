import Benifits from "@/components/Benifits";
import Contest from "@/components/Contest";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hobby from "@/components/Hobby";
import LeadershipBoard from "@/components/LeadershipBoard";
import Rules from "@/components/Rules";

export default function Home() {
  return (
    <div>
      <Header />
      <LeadershipBoard />
      <Hobby />
      <Contest />
      <Rules />
      <Benifits />
      <Footer />    
    </div>
  );
}
