using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;

namespace Core.interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);

    }
}