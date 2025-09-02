import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Service Not Found
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            The service you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.history.back()}
              variant="outline"
              size="lg"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
            <Button 
              onClick={() => window.location.href = '/'}
              size="lg"
              variant="cta"
            >
              <Home className="w-4 h-4 mr-2" />
              Home Page
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;