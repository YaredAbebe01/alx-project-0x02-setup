import Card from "../components/common/Card";

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Home Page</h1>

      <Card 
        title="Next.js Card Component" 
        content="This is a reusable card component created using TypeScript props." 
      />

      <Card 
        title="Second Card" 
        content="You can reuse this card anywhere by passing different props." 
      />

      <Card 
        title="ALX Project Component" 
        content="This demonstrates your ability to build dynamic UI components." 
      />
    </div>
  );
}
