using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Extensions
{
    public static class SwaggerServiceExtensions
    {
        public static IServiceCollection AddSwaggerDocumentation(this IServiceCollection services)
        {
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            services.AddSwaggerGen(c =>{
                c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo{Title="SkiNet API", Version="v1"});
            });
            return services;
        }
        public static IApplicationBuilder UseSwaggerDocumention(this IApplicationBuilder app)
        {
            app.UseSwagger();
            app.UseSwaggerUI(c=>{c.SwaggerEndpoint("/swagger/v1/swagger.json","SkiNet API v1");});
            return app;
        }

    }
}