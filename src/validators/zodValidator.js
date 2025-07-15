export const validate = (schema) => {
   return async (req, res, next) => {
    try{
        console.log('Request body:', req.body);
        schema.parse(req.body);
        next();
    } 
    catch(error){
        console.error('Validation error:', error);
        // If error is a ZodError, error.errors will be an array
        const firstErrorMessage = error.errors && error.errors.length > 0
            ? error.errors[0].message
            : (error.message || "Validation Error");
        res.status(400).json({
            success: false,
            message: firstErrorMessage,
            error: error.errors || error
        });
    }
}
}
