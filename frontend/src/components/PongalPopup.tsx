import { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const PongalPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup on component mount (refresh/enter site)
        setIsOpen(true);
    }, []);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-md bg-silk-ivory border-2 border-silk-gold/30">
                <DialogHeader>
                    <DialogTitle className="text-center font-heading text-xl text-silk-brown hidden">
                        Pongal Wishes
                    </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center justify-center text-center space-y-6 pt-4 pb-2">
                    <div className="space-y-4 font-medium text-silk-brown leading-relaxed">
                        <p className="text-lg">
                            எங்கள் மதிப்புமிக்க வாடிக்கையாளர்கள் அனைவருக்கும்
                            <br />
                            <span className="text-silk-green font-bold text-xl block my-2">
                                இனிய தைப் பொங்கல் நல்வாழ்த்துகள்! 🌾
                            </span>
                        </p>
                        <p className="text-base text-silk-gold-darker">
                            இந்த பொங்கல் உங்கள் வாழ்க்கையில் மகிழ்ச்சி, செழிப்பு
                            <br />
                            மற்றும் வெற்றியை பொங்கிப் பெருகச் செய்யட்டும்.
                        </p>
                    </div>

                    <div className="pt-2">
                        <img
                            src="/t.png"
                            alt="Rathna Tex"
                            className="h-16 w-auto object-contain"
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PongalPopup;
