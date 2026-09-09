import EmpresaInfo from '@/components/EmpresaInfo';
import MisionVision from '@/components/MisionVision';

export default function NosotrosPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-white text-center mb-8">Nosotros</h1>
            <EmpresaInfo />
            <MisionVision />
        </main>
    );
}